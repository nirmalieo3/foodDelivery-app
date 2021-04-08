export interface Products {
    
    IdRistorante: number,
    Ristorante: string,
    Logo: any,
    OrdineMinimo: number,
    TempiConsegna:number,
    CostiConsegna:number,
    Tipologia: number,
    tipologia:{
        IdTipologia: number,
        Tipologia : string 
    }
}