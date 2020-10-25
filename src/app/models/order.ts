import { Detail } from './detail';

export class Order {
    id: string;
    currency: string;
    number: string;
    note: string;
    name: string;
    items: Detail[];
    shippingMethod: string;
    taxesIncluded: string;
}
