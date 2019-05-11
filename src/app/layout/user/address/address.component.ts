import {Component, OnInit} from '@angular/core';
import {Address} from "../../../domain/address";
import {AddressService} from "../../../service/address/address.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers: [AddressService]
})
export class AddressComponent implements OnInit {
  displayedColumns: string[] =
    ['zipcode', 'state', 'city', 'street', 'housenumber', 'modify', 'delete'];
  addresses: Address[] = [];
  dataSource: Address[];
  selectedAddress: Address;
  formGroup: FormGroup;


  constructor(private _formBuilder: FormBuilder,
              private addressService: AddressService
  ) {
  }

  ngOnInit() {
    this.getAddresses();
    this.formGroup = this._formBuilder.group({
      cityCtrl: ['', Validators.required],
      stateCtrl: ['', Validators.required],
      zipCodeCtrl: ['', Validators.required],
      streetCtrl: ['', Validators.required],
      houseNumberCtrl: ['', Validators.required],
      floorCtrl: [''],
      doorCtrl: ['']
    });
  }

  getAddresses(): void {
    this.addressService.getAddresses()
      .subscribe(addresses => {
        this.addresses = addresses;
        this.refresh();
      });
  }

  addAddress(address: Address): void {
    this.addressService.addAddress(address)
      .subscribe(newAddress => {
        this.addresses.push(newAddress);
        this.refresh();
      });
  }

  updateAddress(address: Address): void {
    this.addressService.updateAddress(address)
      .subscribe(newAddress => {
        this.addresses.push(newAddress);
        this.refresh();
      });
  }

  deleteAddress(address: Address): void {
    this.addresses = this.addresses.filter(h => h !== address);
    this.addressService.deleteAddress(address.id).subscribe();
  }

  onModify(address: Address): void {
    this.selectedAddress = address;
  }

  refresh() {
    this.dataSource = [...this.addresses];
  }

  onDelete(address: Address): void {
    this.deleteAddress(address);
  }

  onAddNew() {
    this.selectedAddress = new Address();
    this.selectedAddress.id = null;
    this.selectedAddress.zipcode = null;
    this.selectedAddress.state = null;
    this.selectedAddress.city = null;
    this.selectedAddress.street = null;
    this.selectedAddress.housenumber = null;
    this.selectedAddress.floor = null;
    this.selectedAddress.door = null;
  }

  onSave() {
    let formAddress: Address = new Address();
    formAddress.id = this.selectedAddress.id;
    formAddress.zipcode = this.formGroup.get('zipCodeCtrl').value;
    formAddress.state = this.formGroup.get('stateCtrl').value;
    formAddress.city = this.formGroup.get('cityCtrl').value;
    formAddress.street = this.formGroup.get('streetCtrl').value;
    formAddress.housenumber = this.formGroup.get('houseNumberCtrl').value;
    formAddress.floor = this.formGroup.get('floorCtrl').value;
    formAddress.door = this.formGroup.get('doorCtrl').value;
    if (formAddress.id === null)
      this.addAddress(formAddress);
    else
      this.updateAddress(formAddress);
  }
}
