// Esto es un sustituto de una base de datos. Como no tenemos BBDD, nos hacemos esto.
// Lo vamos a pasar para generar el html con ngFor.

import { PrinterIf, DptoIf } from './master.models';

export const Printers: Array<PrinterIf> = [
    {id: '1', name: 'HP'},
    {id: '2', name: 'Brother'},
    {id: '2', name: 'Dell'},
];

export const Dptos: Array<DptoIf> = [
    {id: '1', name: ''},
    {id: '2', name: 'Ventas'},
    {id: '3', name: 'Marketing'},
    {id: '4', name: 'Sistemas'},
    {id: '5', name: 'Comando Retraso'}
];
