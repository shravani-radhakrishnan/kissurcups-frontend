import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/loader.service';


@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.component.html',
  styleUrls: ['./qrscanner.component.scss'],
})
export class QrscannerComponent implements OnInit {
  torchEnabled = true;
  hasPermission: boolean;
  availableDevices: MediaDeviceInfo[];
  hasDevices: boolean;
  qrCodeNum: any;
  // torchAvailable$ = new BehaviorSubject<boolean>(false);
  constructor(private loaderService:LoaderService) { }
  getConfig() {
    return {
      allowNumbersOnly: false,
      length: 5,
      isPasswordInput: false,
      disableAutoFocus: false,
      inputStyles: {
        'width': '40px',
        'height': '40px'
      }
    };
  }
  ngOnInit() { }


  onCodeResult(qrVal: string) {
    console.log('QR Url');
    const qrCode = qrVal.substr(qrVal.length - 6);
    this.scanOrEnterQRCode(qrCode);

  }
  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  // onTorchCompatible(isCompatible: boolean): void {
  //   this.torchAvailable$.next(isCompatible || false);
  // }
  onQRCodeSubmit(qrCode) {
    this.qrCodeNum = qrCode;
    if (this.qrCodeNum.length === 5) {
      this.scanOrEnterQRCode(this.qrCodeNum);
    }
  }

  scanOrEnterQRCode(qrCode){
    this.loaderService.showLoader();
    const body = {
      'qrCodeId': qrCode.toUpperCase()
    }
  }

}
