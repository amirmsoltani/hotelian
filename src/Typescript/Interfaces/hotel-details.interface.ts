import {HotelType, ImageType, NsgFacilitiesType} from '../Types';

export interface HotelDetailsInterface {
  hotel: HotelType;
  nsg_facilities: {
    hotel_information: NsgFacilitiesType;
    hotel_facilities: NsgFacilitiesType;
  }
  nsg_descriptions: string;
  nsg_images: ImageType[];
}
