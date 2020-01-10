import { Component, OnInit } from '@angular/core';
import { OutletService } from './service/outlet.service';
import { StorageService } from 'src/app/core/services/storage.service';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.scss'],
})
export class OutletComponent implements OnInit {
  outletsData;
  outletInfo;
  address: any;
  elementType: 'url' | 'canvas' | 'img' = 'url';
  // outletDetails =[
  //   {name:'outletName',displayName:'outletName'},
  //   {name:'address',displayName:'Address'},
  //   {name:'noOfTables',displayName:'No of Tables'},
  //   {name:'tables',displayName:'Tables'}
  // ]
  constructor(private outletService: OutletService, private storageService: StorageService) {
    this.getAllOutlet();
  }

  ngOnInit() { }

  customAlertOptions: any = {
    header: 'Outlets',
    // translucent: true
  };

  getAllOutlet() {
    let obj = {
      'mobile': this.storageService.getItem('mobile')
    }
    this.outletService.getAllOutlets(obj)
      .then((data) => {
        console.log(data)
        if (data['body']['type'] === "success") {
          this.outletsData = data['body']['data']['outletData'];
          console.log("outletsData==>",this.outletsData)
        }
      }).catch((err) => {

      })
  }

  selectedOutlet(element){
    let selectedOutlet;
    console.log(element.detail.value)
    this.outletsData.forEach(item => {
      if(item.displayName === element.detail.value){
        selectedOutlet = item.outletId;
      }
    });
    let obj ={
      outletId:selectedOutlet
    }
    this.outletService.getOutletTables(obj)
    .then((data)=>{
      console.log(data);
      this.outletInfo = data['body']['data'];
      this.address = this.outletInfo.address['addressLine'] + this.outletInfo.address['city'] + this.outletInfo.address['pincode'];
    
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  downloadQR() {
    for (let i = 0; i < this.outletInfo.tables.length; i++) {
      let x = document.getElementsByClassName('qr' + i);
      let baseUrl = x[0].children[0].getAttribute('src');
      var pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(baseUrl, 'PNG', 0, 0, 150, 150);
      pdf.save(this.outletInfo.tables[i].tableNo + '.pdf');
    }
  }
}
