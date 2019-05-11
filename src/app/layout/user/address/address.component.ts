import {Component, OnInit} from '@angular/core';
import {Address} from "../../../domain/address";
import {AddressService} from "../../../service/address/address.service";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  displayedColumns: string[] =
    ['zipcode', 'state', 'city', 'street', 'housenumber', 'modify', 'delete'];
  addresses: Address[];

  constructor(private addressService: AddressService) {
  }

  ngOnInit() {
    this.getAddresses();
  }

  getAddresses(): void {
    this.addressService.getAddresses()
      .subscribe(addresses => this.addresses = addresses);
  }

  deleteAddress(address: Address): void {
    this.addresses = this.addresses.filter(h => h !== address);
    this.addressService.deleteAddress(address.id).subscribe();
  }

  onModify(address: Address): void {
    console.log("Modify method invoked");
    console.log(address.id);
  }

  onDelete(address: Address): void {
    console.log(address.id);
    this.deleteAddress(address);
  }

}
