import { PrinterIf, DptoIf, UserIf } from './master.models';

export interface OrderPrintIf {
    user: UserIf;
    printer: PrinterIf;
    isColor: boolean;
    isClaro: boolean;
    dpto: DptoIf;
}


