import { Injectable, OnInit } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BuscaService implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    empresaComId: any = []

    getListaComId() {
        this.genId()
        return this.empresaComId
    }
    
    genId() {
        for (var i = 0; i < this.empresa.length; i++) {
            this.empresa[i].id = i + 1
        }
        // console.log(this.empresa)
        this.empresaComId = this.empresa
        return this.empresaComId
    }

    listaBusca: any = []
    findAll(term: string) {
        this.listaBusca = []
        for (var i = 0; i < this.empresa.length; i++) {
            let listaNome = this.empresa[i].nome
            let listaCodigo = this.empresa[i].codigo

            console.log(i)
            if (listaNome.indexOf(term) !== -1) {
                this.listaBusca = this.listaBusca + " ; " + listaNome
                console.log(listaNome)
            } else { console.log("nada encontrado") }
            if (listaCodigo.indexOf(term) !== -1) {
                this.listaBusca = this.listaBusca + " ; " + listaCodigo
                console.log(listaCodigo)
            } else { console.log("nada encontrado") }
        }
        console.log(this.listaBusca)
        this.resultado = this.listaBusca
        return this.resultado
    }
    resultado = []






    empresa = [
        {
            "id": 0,
            "nome": "3 R Petroleum",
            "codigo": "RRRP3"
        },
        {
            "id": 0,
            "nome": "Aco Altona",
            "codigo": "EALT3"
        },
        {
            "id": 0,
            "nome": "Aco Altona",
            "codigo": "EALT4"
        },
        {
            "id": 0,
            "nome": "Advanced Dh",
            "codigo": "ADHM3"
        },
        {
            "id": 0,
            "nome": "Aeris",
            "codigo": "AERI3"
        },
        {
            "id": 0,
            "nome": "Aes Brasil",
            "codigo": "AESB3"
        },
        {
            "id": 0,
            "nome": "Aes Tiete E",
            "codigo": "TIET11"
        },
        {
            "id": 0,
            "nome": "Aes Tiete E",
            "codigo": "TIET3"
        },
        {
            "id": 0,
            "nome": "Aes Tiete E",
            "codigo": "TIET4"
        },
        {
            "id": 0,
            "nome": "Afluente T",
            "codigo": "AFLT3"
        },
        {
            "id": 0,
            "nome": "Alfa Consorc",
            "codigo": "BRGE11"
        },
        {
            "id": 0,
            "nome": "Alfa Consorc",
            "codigo": "BRGE12"
        },
        {
            "id": 0,
            "nome": "Alfa Consorc",
            "codigo": "BRGE3"
        },
        {
            "id": 0,
            "nome": "Alfa Consorc",
            "codigo": "BRGE5"
        },
        {
            "id": 0,
            "nome": "Alfa Consorc",
            "codigo": "BRGE6"
        },
        {
            "id": 0,
            "nome": "Alfa Consorc",
            "codigo": "BRGE7"
        },
        {
            "id": 0,
            "nome": "Alfa Consorc",
            "codigo": "BRGE8"
        },
        {
            "id": 0,
            "nome": "Alfa Financ",
            "codigo": "CRIV3"
        },
        {
            "id": 0,
            "nome": "Alfa Financ",
            "codigo": "CRIV4"
        },
        {
            "id": 0,
            "nome": "Alfa Holding",
            "codigo": "RPAD3"
        },
        {
            "id": 0,
            "nome": "Alfa Holding",
            "codigo": "RPAD5"
        },
        {
            "id": 0,
            "nome": "Alfa Holding",
            "codigo": "RPAD6"
        },
        {
            "id": 0,
            "nome": "Alfa Invest",
            "codigo": "BRIV3"
        },
        {
            "id": 0,
            "nome": "Alfa Invest",
            "codigo": "BRIV4"
        },
        {
            "id": 0,
            "nome": "Alianscsonae",
            "codigo": "ALSO3"
        },
        {
            "id": 0,
            "nome": "Alianza Trust Renda Imobiliaria Fundo Investimento Imobiliario",
            "codigo": "ALZR11"
        },
        {
            "id": 0,
            "nome": "Alliar",
            "codigo": "AALR3"
        },
        {
            "id": 0,
            "nome": "Allied",
            "codigo": "ALLD3"
        },
        {
            "id": 0,
            "nome": "Alpargatas",
            "codigo": "ALPA3"
        },
        {
            "id": 0,
            "nome": "Alpargatas",
            "codigo": "ALPA4"
        },
        {
            "id": 0,
            "nome": "Alper S.A.",
            "codigo": "APER3"
        },
        {
            "id": 0,
            "nome": "Alphabet DRN A",
            "codigo": "GOGL34"
        },
        {
            "id": 0,
            "nome": "Alphaville",
            "codigo": "AVLL3"
        },
        {
            "id": 0,
            "nome": "Alupar",
            "codigo": "ALUP11"
        },
        {
            "id": 0,
            "nome": "Alupar",
            "codigo": "ALUP3"
        },
        {
            "id": 0,
            "nome": "Alupar",
            "codigo": "ALUP4"
        },
        {
            "id": 0,
            "nome": "Amazonia",
            "codigo": "BAZA3"
        },
        {
            "id": 0,
            "nome": "Ambev S.A.",
            "codigo": "ABEV3"
        },
        {
            "id": 0,
            "nome": "Ambipar",
            "codigo": "AMBP3"
        },
        {
            "id": 0,
            "nome": "Ampla Energ",
            "codigo": "CBEE3"
        },
        {
            "id": 0,
            "nome": "Anima",
            "codigo": "ANIM3"
        },
        {
            "id": 0,
            "nome": "Arezzo Indústria e Comércio S.A.",
            "codigo": "ARZZ3"
        },
        {
            "id": 0,
            "nome": "Assai",
            "codigo": "ASAI3"
        },
        {
            "id": 0,
            "nome": "AtmaSA",
            "codigo": "ATMP3"
        },
        {
            "id": 0,
            "nome": "Atompar",
            "codigo": "ATOM3"
        },
        {
            "id": 0,
            "nome": "Aura 360",
            "codigo": "AURA33"
        },
        {
            "id": 0,
            "nome": "Azevedo",
            "codigo": "AZEV3"
        },
        {
            "id": 0,
            "nome": "Azevedo",
            "codigo": "AZEV4"
        },
        {
            "id": 0,
            "nome": "Azul S.A.",
            "codigo": "AZUL4"
        },
        {
            "id": 0,
            "nome": "B2W - Companhia Digital",
            "codigo": "BTOW3"
        },
        {
            "id": 0,
            "nome": "B3 S.A. - Brasil, Bolsa, Balcão",
            "codigo": "B3SA3"
        },
        {
            "id": 0,
            "nome": "Bahema",
            "codigo": "BAHI3"
        },
        {
            "id": 0,
            "nome": "Banco Bmg",
            "codigo": "BMGB4"
        },
        {
            "id": 0,
            "nome": "Banco Bradesco S.A.",
            "codigo": "BBDC3"
        },
        {
            "id": 0,
            "nome": "Banco Bradesco S.A.",
            "codigo": "BBDC4"
        },
        {
            "id": 0,
            "nome": "Banco do Brasil S.A.",
            "codigo": "BBAS3"
        },
        {
            "id": 0,
            "nome": "Banco do Estado do Rio Grande do Sul S.A.",
            "codigo": "BRSR6"
        },
        {
            "id": 0,
            "nome": "Banco Inter",
            "codigo": "BIDI11"
        },
        {
            "id": 0,
            "nome": "Banco Inter S.A.",
            "codigo": "BIDI4"
        },
        {
            "id": 0,
            "nome": "Banco Inter S.A.",
            "codigo": "BIDI3"
        },
        {
            "id": 0,
            "nome": "Banco Modal",
            "codigo": "MODL4"
        },
        {
            "id": 0,
            "nome": "Banco Modal",
            "codigo": "MODL11"
        },
        {
            "id": 0,
            "nome": "Banco Modal",
            "codigo": "MODL3"
        },
        {
            "id": 0,
            "nome": "Banco Pan",
            "codigo": "BPAN4"
        },
        {
            "id": 0,
            "nome": "Banco Santander (Brasil) S.A.",
            "codigo": "SANB3"
        },
        {
            "id": 0,
            "nome": "Banco Santander (Brasil) S.A.",
            "codigo": "SANB11"
        },
        {
            "id": 0,
            "nome": "Banese",
            "codigo": "BGIP3"
        },
        {
            "id": 0,
            "nome": "Banese",
            "codigo": "BGIP4"
        },
        {
            "id": 0,
            "nome": "Banestes",
            "codigo": "BEES3"
        },
        {
            "id": 0,
            "nome": "Banestes",
            "codigo": "BEES4"
        },
        {
            "id": 0,
            "nome": "Banpara",
            "codigo": "BPAR3"
        },
        {
            "id": 0,
            "nome": "Banrisul",
            "codigo": "BRSR3"
        },
        {
            "id": 0,
            "nome": "Banrisul",
            "codigo": "BRSR5"
        },
        {
            "id": 0,
            "nome": "Bardella",
            "codigo": "BDLL3"
        },
        {
            "id": 0,
            "nome": "Bardella",
            "codigo": "BDLL4"
        },
        {
            "id": 0,
            "nome": "Battistella",
            "codigo": "BTTL3"
        },
        {
            "id": 0,
            "nome": "Baumer",
            "codigo": "BALM3"
        },
        {
            "id": 0,
            "nome": "Baumer",
            "codigo": "BALM4"
        },
        {
            "id": 0,
            "nome": "BB Progressivo II Fundo de Investimento Imobiliario - FII",
            "codigo": "BBPO11"
        },
        {
            "id": 0,
            "nome": "BB Seguridade Participações S.A.",
            "codigo": "BBSE3"
        },
        {
            "id": 0,
            "nome": "Bemobi Tech",
            "codigo": "BMOB3"
        },
        {
            "id": 0,
            "nome": "Bic Monark",
            "codigo": "BMKS3"
        },
        {
            "id": 0,
            "nome": "Biomm",
            "codigo": "BIOM3"
        },
        {
            "id": 0,
            "nome": "Biosev",
            "codigo": "BSEV3"
        },
        {
            "id": 0,
            "nome": "Bk Brasil",
            "codigo": "BKBR3"
        },
        {
            "id": 0,
            "nome": "Blau",
            "codigo": "BLAU3"
        },
        {
            "id": 0,
            "nome": "Boa Safra",
            "codigo": "SOJA3"
        },
        {
            "id": 0,
            "nome": "Boa Vista",
            "codigo": "BOAS3"
        },
        {
            "id": 0,
            "nome": "Bombril",
            "codigo": "BOBR3"
        },
        {
            "id": 0,
            "nome": "Bombril",
            "codigo": "BOBR4"
        },
        {
            "id": 0,
            "nome": "Br Brokers",
            "codigo": "BBRK3"
        },
        {
            "id": 0,
            "nome": "BR Malls Participações S.A.",
            "codigo": "BRML3"
        },
        {
            "id": 0,
            "nome": "Br Propert",
            "codigo": "BRPR3"
        },
        {
            "id": 0,
            "nome": "Bradespar S.A.",
            "codigo": "BRAP4"
        },
        {
            "id": 0,
            "nome": "Bradespar S.A.",
            "codigo": "BRAP3"
        },
        {
            "id": 0,
            "nome": "Brasilagro",
            "codigo": "AGRO3"
        },
        {
            "id": 0,
            "nome": "Braskem",
            "codigo": "BRKM6"
        },
        {
            "id": 0,
            "nome": "Braskem S.A.",
            "codigo": "BRKM5"
        },
        {
            "id": 0,
            "nome": "Braskem S.A.",
            "codigo": "BRKM3"
        },
        {
            "id": 0,
            "nome": "Brb Banco",
            "codigo": "BSLI3"
        },
        {
            "id": 0,
            "nome": "Brb Banco",
            "codigo": "BSLI4"
        },
        {
            "id": 0,
            "nome": "BRF S.A.",
            "codigo": "BRFS3"
        },
        {
            "id": 0,
            "nome": "Btgp Banco",
            "codigo": "BPAC11"
        },
        {
            "id": 0,
            "nome": "Btgp Banco",
            "codigo": "BPAC3"
        },
        {
            "id": 0,
            "nome": "Btgp Banco",
            "codigo": "BPAC5"
        },
        {
            "id": 0,
            "nome": "Cambuci",
            "codigo": "CAMB3"
        },
        {
            "id": 0,
            "nome": "Camil Alimentos S.A.",
            "codigo": "CAML3"
        },
        {
            "id": 0,
            "nome": "Carrefour Br",
            "codigo": "CRFB3"
        },
        {
            "id": 0,
            "nome": "CaSAn",
            "codigo": "CASN"
        },
        {
            "id": 0,
            "nome": "CaSAn",
            "codigo": "CASN3"
        },
        {
            "id": 0,
            "nome": "CaSAn",
            "codigo": "CASN4"
        },
        {
            "id": 0,
            "nome": "CCR S.A.",
            "codigo": "CCRO3"
        },
        {
            "id": 0,
            "nome": "Cea Modas",
            "codigo": "CEAB3"
        },
        {
            "id": 0,
            "nome": "Ceb",
            "codigo": "CEBR3"
        },
        {
            "id": 0,
            "nome": "Ceb",
            "codigo": "CEBR5"
        },
        {
            "id": 0,
            "nome": "Ceb",
            "codigo": "CEBR6"
        },
        {
            "id": 0,
            "nome": "Cedro",
            "codigo": "CEDO3"
        },
        {
            "id": 0,
            "nome": "Cedro",
            "codigo": "CEDO4"
        },
        {
            "id": 0,
            "nome": "Ceee D",
            "codigo": "CEED3"
        },
        {
            "id": 0,
            "nome": "Ceee D",
            "codigo": "CEED4"
        },
        {
            "id": 0,
            "nome": "Ceee Gt",
            "codigo": "EEEL3"
        },
        {
            "id": 0,
            "nome": "Ceee Gt",
            "codigo": "EEEL4"
        },
        {
            "id": 0,
            "nome": "Ceg",
            "codigo": "CEGR3"
        },
        {
            "id": 0,
            "nome": "Celesc",
            "codigo": "CLSC3"
        },
        {
            "id": 0,
            "nome": "Celesc",
            "codigo": "CLSC4"
        },
        {
            "id": 0,
            "nome": "Celgpar",
            "codigo": "GPAR3"
        },
        {
            "id": 0,
            "nome": "Celpe",
            "codigo": "CEPE3"
        },
        {
            "id": 0,
            "nome": "Celpe",
            "codigo": "CEPE5"
        },
        {
            "id": 0,
            "nome": "Celpe",
            "codigo": "CEPE6"
        },
        {
            "id": 0,
            "nome": "Cemepe",
            "codigo": "MAPT3"
        },
        {
            "id": 0,
            "nome": "Cemepe",
            "codigo": "MAPT4"
        },
        {
            "id": 0,
            "nome": "Centauro",
            "codigo": "CNTO3"
        },
        {
            "id": 0,
            "nome": "Centrais Elétricas Brasileiras S.A. - Eletrobras",
            "codigo": "ELET3"
        },
        {
            "id": 0,
            "nome": "Centrais Elétricas Brasileiras S.A. - Eletrobras",
            "codigo": "ELET6"
        },
        {
            "id": 0,
            "nome": "Cesp",
            "codigo": "CESP3"
        },
        {
            "id": 0,
            "nome": "Cesp",
            "codigo": "CESP5"
        },
        {
            "id": 0,
            "nome": "Cesp",
            "codigo": "CESP6"
        },
        {
            "id": 0,
            "nome": "Cia. Hering",
            "codigo": "HGTX3"
        },
        {
            "id": 0,
            "nome": "Cielo S.A.",
            "codigo": "CIEL3"
        },
        {
            "id": 0,
            "nome": "Coelba",
            "codigo": "CEEB3"
        },
        {
            "id": 0,
            "nome": "Coelba",
            "codigo": "CEEB5"
        },
        {
            "id": 0,
            "nome": "Coelce",
            "codigo": "COCE3"
        },
        {
            "id": 0,
            "nome": "Coelce",
            "codigo": "COCE5"
        },
        {
            "id": 0,
            "nome": "Cogna Educação S.A.",
            "codigo": "COGN3"
        },
        {
            "id": 0,
            "nome": "Comgas",
            "codigo": "CGAS3"
        },
        {
            "id": 0,
            "nome": "Comgas",
            "codigo": "CGAS5"
        },
        {
            "id": 0,
            "nome": "Companhia de Locação das Américas",
            "codigo": "LCAM3"
        },
        {
            "id": 0,
            "nome": "Companhia de Saneamento Básico do Estado de São Paulo - SABESP",
            "codigo": "SBSP3"
        },
        {
            "id": 0,
            "nome": "Companhia Energética de Minas Gerais",
            "codigo": "CMIG3"
        },
        {
            "id": 0,
            "nome": "Companhia Energética de Minas Gerais",
            "codigo": "CMIG4"
        },
        {
            "id": 0,
            "nome": "Companhia Paranaense de Energia - COPEL",
            "codigo": "CPLE6"
        },
        {
            "id": 0,
            "nome": "Companhia Paranaense de Energia - COPEL",
            "codigo": "CPLE3"
        },
        {
            "id": 0,
            "nome": "Companhia Siderúrgica Nacional",
            "codigo": "CSNA3"
        },
        {
            "id": 0,
            "nome": "Const A Lind",
            "codigo": "CALI3"
        },
        {
            "id": 0,
            "nome": "Const A Lind",
            "codigo": "CALI4"
        },
        {
            "id": 0,
            "nome": "CopaSA",
            "codigo": "CSMG3"
        },
        {
            "id": 0,
            "nome": "Copel",
            "codigo": "CPLE5"
        },
        {
            "id": 0,
            "nome": "Cor Ribeiro",
            "codigo": "CORR4"
        },
        {
            "id": 0,
            "nome": "CoSAn Log",
            "codigo": "RLOG3"
        },
        {
            "id": 0,
            "nome": "Cosan S.A.",
            "codigo": "CSAN3"
        },
        {
            "id": 0,
            "nome": "Cosern",
            "codigo": "CSRN3"
        },
        {
            "id": 0,
            "nome": "Cosern",
            "codigo": "CSRN5"
        },
        {
            "id": 0,
            "nome": "Cosern",
            "codigo": "CSRN6"
        },
        {
            "id": 0,
            "nome": "Coteminas",
            "codigo": "CTNM3"
        },
        {
            "id": 0,
            "nome": "Coteminas",
            "codigo": "CTNM4"
        },
        {
            "id": 0,
            "nome": "CPFL Energia S.A.",
            "codigo": "CPFE3"
        },
        {
            "id": 0,
            "nome": "Cr2",
            "codigo": "CRDE3"
        },
        {
            "id": 0,
            "nome": "Cristal",
            "codigo": "CRPG3"
        },
        {
            "id": 0,
            "nome": "Cristal",
            "codigo": "CRPG5"
        },
        {
            "id": 0,
            "nome": "Cristal",
            "codigo": "CRPG6"
        },
        {
            "id": 0,
            "nome": "Cruzeiro Edu",
            "codigo": "CSED3"
        },
        {
            "id": 0,
            "nome": "CSHG Logistica - Fundo De Investimento Imobiliario",
            "codigo": "HGLG11"
        },
        {
            "id": 0,
            "nome": "Csnmineracao",
            "codigo": "CMIN3"
        },
        {
            "id": 0,
            "nome": "Csu Cardsyst",
            "codigo": "CARD3"
        },
        {
            "id": 0,
            "nome": "Cury S/A",
            "codigo": "CURY3"
        },
        {
            "id": 0,
            "nome": "CVC Brasil Operadora e Agência de Viagens S.A.",
            "codigo": "CVCB3"
        },
        {
            "id": 0,
            "nome": "Cyre Com Ccp",
            "codigo": "CCPR3"
        },
        {
            "id": 0,
            "nome": "Cyrela Brazil Realty S.A. Empreendimentos e Participações",
            "codigo": "CYRE3"
        },
        {
            "id": 0,
            "nome": "D1000 Vfarma",
            "codigo": "DMVF3"
        },
        {
            "id": 0,
            "nome": "DaSA",
            "codigo": "DASA3"
        },
        {
            "id": 0,
            "nome": "Dimed",
            "codigo": "PNVL3"
        },
        {
            "id": 0,
            "nome": "Dimed",
            "codigo": "PNVL4"
        },
        {
            "id": 0,
            "nome": "Direcional",
            "codigo": "DIRR3"
        },
        {
            "id": 0,
            "nome": "Dohler",
            "codigo": "DOHL3"
        },
        {
            "id": 0,
            "nome": "Dohler",
            "codigo": "DOHL4"
        },
        {
            "id": 0,
            "nome": "Dommo",
            "codigo": "DMMO3"
        },
        {
            "id": 0,
            "nome": "Dtcom Direct",
            "codigo": "DTCY3"
        },
        {
            "id": 0,
            "nome": "Duratex",
            "codigo": "DTEX3"
        },
        {
            "id": 0,
            "nome": "EcoRodovias Infraestrutura e Logística S.A.",
            "codigo": "ECOR3"
        },
        {
            "id": 0,
            "nome": "EDP - Energias do Brasil S.A.",
            "codigo": "ENBR3"
        },
        {
            "id": 0,
            "nome": "Elektro",
            "codigo": "EKTR3"
        },
        {
            "id": 0,
            "nome": "Elektro",
            "codigo": "EKTR4"
        },
        {
            "id": 0,
            "nome": "Eletrobras",
            "codigo": "ELET5"
        },
        {
            "id": 0,
            "nome": "Eletromidia",
            "codigo": "ELMD3"
        },
        {
            "id": 0,
            "nome": "Eletropar",
            "codigo": "LIPR3"
        },
        {
            "id": 0,
            "nome": "Emae",
            "codigo": "EMAE3"
        },
        {
            "id": 0,
            "nome": "Emae",
            "codigo": "EMAE4"
        },
        {
            "id": 0,
            "nome": "Embraer S.A.",
            "codigo": "EMBR3"
        },
        {
            "id": 0,
            "nome": "Enauta Part",
            "codigo": "ENAT3"
        },
        {
            "id": 0,
            "nome": "Encorpar",
            "codigo": "ECPR3"
        },
        {
            "id": 0,
            "nome": "Encorpar",
            "codigo": "ECPR4"
        },
        {
            "id": 0,
            "nome": "EnergiSA",
            "codigo": "ENGI"
        },
        {
            "id": 0,
            "nome": "EnergiSA",
            "codigo": "ENGI11"
        },
        {
            "id": 0,
            "nome": "EnergiSA",
            "codigo": "ENGI3"
        },
        {
            "id": 0,
            "nome": "EnergiSA",
            "codigo": "ENGI4"
        },
        {
            "id": 0,
            "nome": "EnergiSA Mt",
            "codigo": "ENMT3"
        },
        {
            "id": 0,
            "nome": "EnergiSA Mt",
            "codigo": "ENMT4"
        },
        {
            "id": 0,
            "nome": "Eneva",
            "codigo": "ENEV3"
        },
        {
            "id": 0,
            "nome": "Engie Brasil Energia S.A.",
            "codigo": "EGIE3"
        },
        {
            "id": 0,
            "nome": "Enjoei",
            "codigo": "ENJU3"
        },
        {
            "id": 0,
            "nome": "Eqtl Para",
            "codigo": "EQPA3"
        },
        {
            "id": 0,
            "nome": "Eqtl Para",
            "codigo": "EQPA5"
        },
        {
            "id": 0,
            "nome": "Eqtl Para",
            "codigo": "EQPA6"
        },
        {
            "id": 0,
            "nome": "Eqtl Para",
            "codigo": "EQPA7"
        },
        {
            "id": 0,
            "nome": "Equatorial Energia S.A.",
            "codigo": "EQTL3"
        },
        {
            "id": 0,
            "nome": "Espacolaser",
            "codigo": "ESPA3"
        },
        {
            "id": 0,
            "nome": "Estácio Participações S.A.",
            "codigo": "YDUQ3"
        },
        {
            "id": 0,
            "nome": "Estapar",
            "codigo": "ALPK3"
        },
        {
            "id": 0,
            "nome": "Estrela",
            "codigo": "ESTR3"
        },
        {
            "id": 0,
            "nome": "Estrela",
            "codigo": "ESTR4"
        },
        {
            "id": 0,
            "nome": "Eternit",
            "codigo": "ETER3"
        },
        {
            "id": 0,
            "nome": "Eucatex",
            "codigo": "EUCA3"
        },
        {
            "id": 0,
            "nome": "Eucatex",
            "codigo": "EUCA4"
        },
        {
            "id": 0,
            "nome": "Even",
            "codigo": "EVEN3"
        },
        {
            "id": 0,
            "nome": "Excelsior",
            "codigo": "BAUH4"
        },
        {
            "id": 0,
            "nome": "Eztec",
            "codigo": "EZTC3"
        },
        {
            "id": 0,
            "nome": "FD Invest Imob Hotel Maxinvest",
            "codigo": "HTMX11"
        },
        {
            "id": 0,
            "nome": "Fer Heringer",
            "codigo": "FHER3"
        },
        {
            "id": 0,
            "nome": "FerbaSA",
            "codigo": "FESA3"
        },
        {
            "id": 0,
            "nome": "FerbaSA",
            "codigo": "FESA4"
        },
        {
            "id": 0,
            "nome": "Fleury S.A.",
            "codigo": "FLRY3"
        },
        {
            "id": 0,
            "nome": "Focus On",
            "codigo": "POWE3"
        },
        {
            "id": 0,
            "nome": "Fras Le",
            "codigo": "FRAS3"
        },
        {
            "id": 0,
            "nome": "Fundo de Investimento Imobiliario - FII Brasil Plural Absoluto Fundo de Fundos",
            "codigo": "BPFF11"
        },
        {
            "id": 0,
            "nome": "Fundo Investimento Imobiliario Rbr Properties Fii",
            "codigo": "RBRP11"
        },
        {
            "id": 0,
            "nome": "GafiSA",
            "codigo": "GFSA3"
        },
        {
            "id": 0,
            "nome": "Generalshopp",
            "codigo": "GSHP3"
        },
        {
            "id": 0,
            "nome": "Ger Paranap",
            "codigo": "GEPA3"
        },
        {
            "id": 0,
            "nome": "Ger Paranap",
            "codigo": "GEPA4"
        },
        {
            "id": 0,
            "nome": "Gerdau Met",
            "codigo": "GOAU3"
        },
        {
            "id": 0,
            "nome": "Gerdau S.A.",
            "codigo": "GGBR3"
        },
        {
            "id": 0,
            "nome": "Gerdau S.A.",
            "codigo": "GGBR4"
        },
        {
            "id": 0,
            "nome": "Gol Linhas Aéreas Inteligentes S.A.",
            "codigo": "GOLL4"
        },
        {
            "id": 0,
            "nome": "Gp Invest",
            "codigo": "GPIV33"
        },
        {
            "id": 0,
            "nome": "GPA Companhia Brasileira de Distribuição",
            "codigo": "PCAR3"
        },
        {
            "id": 0,
            "nome": "Gpc Part",
            "codigo": "GPCP3"
        },
        {
            "id": 0,
            "nome": "Grazziotin",
            "codigo": "CGRA3"
        },
        {
            "id": 0,
            "nome": "Grazziotin",
            "codigo": "CGRA4"
        },
        {
            "id": 0,
            "nome": "Grendene S.A.",
            "codigo": "GRND3"
        },
        {
            "id": 0,
            "nome": "Grupo Mateus S.A.",
            "codigo": "GMAT3"
        },
        {
            "id": 0,
            "nome": "Grupo Soma",
            "codigo": "SOMA3"
        },
        {
            "id": 0,
            "nome": "Guararapes",
            "codigo": "GUAR3"
        },
        {
            "id": 0,
            "nome": "Habitasul",
            "codigo": "HBTS5"
        },
        {
            "id": 0,
            "nome": "Haga S/A",
            "codigo": "HAGA3"
        },
        {
            "id": 0,
            "nome": "Haga S/A",
            "codigo": "HAGA4"
        },
        {
            "id": 0,
            "nome": "Hapvida",
            "codigo": "HAPV3"
        },
        {
            "id": 0,
            "nome": "Hbr Realty",
            "codigo": "HBRE3"
        },
        {
            "id": 0,
            "nome": "HEDGE Brasil Shopping Fundo de Investimento Imobiliario",
            "codigo": "HGBS11"
        },
        {
            "id": 0,
            "nome": "Helbor Empreendimentos S.A.",
            "codigo": "HBOR3"
        },
        {
            "id": 0,
            "nome": "Hercules",
            "codigo": "HETA3"
        },
        {
            "id": 0,
            "nome": "Hercules",
            "codigo": "HETA4"
        },
        {
            "id": 0,
            "nome": "Hidrovias",
            "codigo": "HBSA3"
        },
        {
            "id": 0,
            "nome": "Hoteis Othon",
            "codigo": "HOOT4"
        },
        {
            "id": 0,
            "nome": "Hypera S.A.",
            "codigo": "HYPE3"
        },
        {
            "id": 0,
            "nome": "Igb S/A",
            "codigo": "IGBR3"
        },
        {
            "id": 0,
            "nome": "Iguatemi Empresa de Shopping Centers S.A.",
            "codigo": "IGTA3"
        },
        {
            "id": 0,
            "nome": "Ihpardini",
            "codigo": "PARD3"
        },
        {
            "id": 0,
            "nome": "Inds Romi",
            "codigo": "ROMI3"
        },
        {
            "id": 0,
            "nome": "Indusval",
            "codigo": "IDVL3"
        },
        {
            "id": 0,
            "nome": "Indusval",
            "codigo": "IDVL4"
        },
        {
            "id": 0,
            "nome": "Inepar",
            "codigo": "INEP3"
        },
        {
            "id": 0,
            "nome": "Inepar",
            "codigo": "INEP4"
        },
        {
            "id": 0,
            "nome": "Infracomm",
            "codigo": "IFCM3"
        },
        {
            "id": 0,
            "nome": "Intelbras",
            "codigo": "INTB3"
        },
        {
            "id": 0,
            "nome": "Intermedica",
            "codigo": "GNDI3"
        },
        {
            "id": 0,
            "nome": "International Meal Company Alimentacao S.A.",
            "codigo": "MEAL3"
        },
        {
            "id": 0,
            "nome": "Iochpe-Maxion S.A.",
            "codigo": "MYPK3"
        },
        {
            "id": 0,
            "nome": "Irani",
            "codigo": "RANI3"
        },
        {
            "id": 0,
            "nome": "Irani",
            "codigo": "RANI4"
        },
        {
            "id": 0,
            "nome": "IRB-Brasil Resseguros S.A.",
            "codigo": "IRBR3"
        },
        {
            "id": 0,
            "nome": "iShares Ibovespa Fundo de Índice ETF",
            "codigo": "BOVA11"
        },
        {
            "id": 0,
            "nome": "iShares S&P 500 Fundo de Investimento - Investimento No Exterior",
            "codigo": "IVVB11"
        },
        {
            "id": 0,
            "nome": "Itaú Unibanco Holding S.A.",
            "codigo": "ITUB4"
        },
        {
            "id": 0,
            "nome": "Itaú Unibanco Holding S.A.",
            "codigo": "ITUB3"
        },
        {
            "id": 0,
            "nome": "Itaúsa - Investimentos Itaú S.A.",
            "codigo": "ITSA4"
        },
        {
            "id": 0,
            "nome": "Itausa - Investimentos Itau S.A.",
            "codigo": "ITSA3"
        },
        {
            "id": 0,
            "nome": "J B Duarte",
            "codigo": "JBDU3"
        },
        {
            "id": 0,
            "nome": "J B Duarte",
            "codigo": "JBDU4"
        },
        {
            "id": 0,
            "nome": "Jallesmachad",
            "codigo": "JALL3"
        },
        {
            "id": 0,
            "nome": "JBS S.A.",
            "codigo": "JBSS3"
        },
        {
            "id": 0,
            "nome": "JD COM DRN",
            "codigo": "JDCO34"
        },
        {
            "id": 0,
            "nome": "JereisSAti",
            "codigo": "JPSA3"
        },
        {
            "id": 0,
            "nome": "JHSF Participacoes S.A.",
            "codigo": "JHSF3"
        },
        {
            "id": 0,
            "nome": "Joao Fortes",
            "codigo": "JFEN3"
        },
        {
            "id": 0,
            "nome": "JoSApar",
            "codigo": "JOPA3"
        },
        {
            "id": 0,
            "nome": "JoSApar",
            "codigo": "JOPA4"
        },
        {
            "id": 0,
            "nome": "Karsten",
            "codigo": "CTKA3"
        },
        {
            "id": 0,
            "nome": "Karsten",
            "codigo": "CTKA4"
        },
        {
            "id": 0,
            "nome": "Kepler Weber",
            "codigo": "KEPL3"
        },
        {
            "id": 0,
            "nome": "KINEA Renda Imobiliária - Fundo de Investimento Imobiliário",
            "codigo": "KNRI11"
        },
        {
            "id": 0,
            "nome": "Klabin S/A",
            "codigo": "KLBN3"
        },
        {
            "id": 0,
            "nome": "Klabin S/A",
            "codigo": "KLBN4"
        },
        {
            "id": 0,
            "nome": "KLABIN S/A UNT N2",
            "codigo": "KLBN11"
        },
        {
            "id": 0,
            "nome": "Lavvi",
            "codigo": "LAVV3"
        },
        {
            "id": 0,
            "nome": "Le Lis Blanc",
            "codigo": "LLIS3"
        },
        {
            "id": 0,
            "nome": "Light S/A",
            "codigo": "LIGT3"
        },
        {
            "id": 0,
            "nome": "Linx",
            "codigo": "LINX3"
        },
        {
            "id": 0,
            "nome": "Localiza Rent a Car S.A.",
            "codigo": "RENT3"
        },
        {
            "id": 0,
            "nome": "Locaweb",
            "codigo": "LWSA3"
        },
        {
            "id": 0,
            "nome": "Log Com Prop",
            "codigo": "LOGG3"
        },
        {
            "id": 0,
            "nome": "Log In",
            "codigo": "LOGN3"
        },
        {
            "id": 0,
            "nome": "Lojas Americ",
            "codigo": "LAME3"
        },
        {
            "id": 0,
            "nome": "Lojas Americanas S.A.",
            "codigo": "LAME4"
        },
        {
            "id": 0,
            "nome": "Lojas MariSA",
            "codigo": "AMAR3"
        },
        {
            "id": 0,
            "nome": "Lojas Renner S.A.",
            "codigo": "LREN3"
        },
        {
            "id": 0,
            "nome": "Lopes Brasil",
            "codigo": "LPSB3"
        },
        {
            "id": 0,
            "nome": "Lupatech",
            "codigo": "LUPA3"
        },
        {
            "id": 0,
            "nome": "M. Dias Branco S.A. Indústria e Comércio de Alimentos",
            "codigo": "MDIA3"
        },
        {
            "id": 0,
            "nome": "Magazine Luiza S.A.",
            "codigo": "MGLU3"
        },
        {
            "id": 0,
            "nome": "Mangels Indl",
            "codigo": "MGEL4"
        },
        {
            "id": 0,
            "nome": "Marcopolo",
            "codigo": "POMO3"
        },
        {
            "id": 0,
            "nome": "Marcopolo",
            "codigo": "POMO4"
        },
        {
            "id": 0,
            "nome": "Marfrig Global Foods S.A.",
            "codigo": "MRFG3"
        },
        {
            "id": 0,
            "nome": "Maxi Renda Fundo De Investimento Imobiliaro - FII",
            "codigo": "MXRF11"
        },
        {
            "id": 0,
            "nome": "Melhor Sp",
            "codigo": "MSPA3"
        },
        {
            "id": 0,
            "nome": "Melhor Sp",
            "codigo": "MSPA4"
        },
        {
            "id": 0,
            "nome": "Meliuz",
            "codigo": "CASH3"
        },
        {
            "id": 0,
            "nome": "Melnick",
            "codigo": "MELK3"
        },
        {
            "id": 0,
            "nome": "Merc Brasil",
            "codigo": "BMEB3"
        },
        {
            "id": 0,
            "nome": "Merc Brasil",
            "codigo": "BMEB4"
        },
        {
            "id": 0,
            "nome": "Merc Financ",
            "codigo": "MERC3"
        },
        {
            "id": 0,
            "nome": "Merc Financ",
            "codigo": "MERC4"
        },
        {
            "id": 0,
            "nome": "Merc Invest",
            "codigo": "BMIN3"
        },
        {
            "id": 0,
            "nome": "Merc Invest",
            "codigo": "BMIN4"
        },
        {
            "id": 0,
            "nome": "Merito Desenvolvimento Imobiliario I FII - Fundo de Investimento Imobiliario",
            "codigo": "MFII11"
        },
        {
            "id": 0,
            "nome": "Metal Iguacu",
            "codigo": "MTIG4"
        },
        {
            "id": 0,
            "nome": "Metal Leve",
            "codigo": "LEVE3"
        },
        {
            "id": 0,
            "nome": "Metalfrio",
            "codigo": "FRIO3"
        },
        {
            "id": 0,
            "nome": "Metalurgica Gerdau S.A.",
            "codigo": "GOAU4"
        },
        {
            "id": 0,
            "nome": "MetiSA",
            "codigo": "MTSA3"
        },
        {
            "id": 0,
            "nome": "MetiSA",
            "codigo": "MTSA4"
        },
        {
            "id": 0,
            "nome": "Mills Estruturas e Servicos de Engenharia S.A.",
            "codigo": "MILS3"
        },
        {
            "id": 0,
            "nome": "Minerva",
            "codigo": "BEEF"
        },
        {
            "id": 0,
            "nome": "Minerva",
            "codigo": "BEEF3"
        },
        {
            "id": 0,
            "nome": "Minupar",
            "codigo": "MNPR3"
        },
        {
            "id": 0,
            "nome": "Mitre Realty",
            "codigo": "MTRE3"
        },
        {
            "id": 0,
            "nome": "Mmx Miner",
            "codigo": "MMXM11"
        },
        {
            "id": 0,
            "nome": "Mmx Miner",
            "codigo": "MMXM3"
        },
        {
            "id": 0,
            "nome": "Mobly",
            "codigo": "MBLY3"
        },
        {
            "id": 0,
            "nome": "Mont Aranha",
            "codigo": "MOAR3"
        },
        {
            "id": 0,
            "nome": "Mosaico",
            "codigo": "MOSI3"
        },
        {
            "id": 0,
            "nome": "Moura Dubeux",
            "codigo": "MDNE3"
        },
        {
            "id": 0,
            "nome": "Movida Participacoes S.A.",
            "codigo": "MOVI3"
        },
        {
            "id": 0,
            "nome": "MRV Engenharia e Participações S.A.",
            "codigo": "MRVE3"
        },
        {
            "id": 0,
            "nome": "Multiplan Empreendimentos Imobiliários S.A.",
            "codigo": "MULT3"
        },
        {
            "id": 0,
            "nome": "Mundial",
            "codigo": "MNDL3"
        },
        {
            "id": 0,
            "nome": "Natura &Co Holding S.A.",
            "codigo": "NTCO3"
        },
        {
            "id": 0,
            "nome": "Natura Cosméticos S.A.",
            "codigo": "NATU3"
        },
        {
            "id": 0,
            "nome": "Neoenergia",
            "codigo": "NEOE3"
        },
        {
            "id": 0,
            "nome": "Neogrid",
            "codigo": "NGRD3"
        },
        {
            "id": 0,
            "nome": "Nord Brasil",
            "codigo": "BNBR3"
        },
        {
            "id": 0,
            "nome": "Nordon Met",
            "codigo": "NORD3"
        },
        {
            "id": 0,
            "nome": "Nutriplant",
            "codigo": "NUTR3"
        },
        {
            "id": 0,
            "nome": "Oceanpact",
            "codigo": "OPCT3"
        },
        {
            "id": 0,
            "nome": "Odontoprev",
            "codigo": "ODPV3"
        },
        {
            "id": 0,
            "nome": "Oi",
            "codigo": "OIBR4"
        },
        {
            "id": 0,
            "nome": "Oi S.A.",
            "codigo": "OIBR3"
        },
        {
            "id": 0,
            "nome": "Omega Ger",
            "codigo": "OMGE3"
        },
        {
            "id": 0,
            "nome": "Orizon",
            "codigo": "ORVR3"
        },
        {
            "id": 0,
            "nome": "Osx Brasil",
            "codigo": "OSXB3"
        },
        {
            "id": 0,
            "nome": "Ourofino S/A",
            "codigo": "OFSA3"
        },
        {
            "id": 0,
            "nome": "Padtec",
            "codigo": "PDTC3"
        },
        {
            "id": 0,
            "nome": "Pague Menos",
            "codigo": "PGMN3"
        },
        {
            "id": 0,
            "nome": "Panatlantica",
            "codigo": "PATI3"
        },
        {
            "id": 0,
            "nome": "Panatlantica",
            "codigo": "PATI4"
        },
        {
            "id": 0,
            "nome": "Par Al Bahia",
            "codigo": "PEAB3"
        },
        {
            "id": 0,
            "nome": "Par Al Bahia",
            "codigo": "PEAB4"
        },
        {
            "id": 0,
            "nome": "Paranapanema",
            "codigo": "PMAM3"
        },
        {
            "id": 0,
            "nome": "Pdg Realt",
            "codigo": "PDGR3"
        },
        {
            "id": 0,
            "nome": "Pet Center Comércio e Participações S.A.",
            "codigo": "PETZ3"
        },
        {
            "id": 0,
            "nome": "Pet Manguinh",
            "codigo": "RPMG3"
        },
        {
            "id": 0,
            "nome": "Petrobras Distribuidora S.A.",
            "codigo": "BRDT3"
        },
        {
            "id": 0,
            "nome": "Petróleo Brasileiro S.A. - Petrobras",
            "codigo": "PETR4"
        },
        {
            "id": 0,
            "nome": "Petróleo Brasileiro S.A. - Petrobras",
            "codigo": "PETR3"
        },
        {
            "id": 0,
            "nome": "Petrorio",
            "codigo": "PRIO3"
        },
        {
            "id": 0,
            "nome": "Pettenati",
            "codigo": "PTNT3"
        },
        {
            "id": 0,
            "nome": "Pettenati",
            "codigo": "PTNT4"
        },
        {
            "id": 0,
            "nome": "Pine",
            "codigo": "PINE4"
        },
        {
            "id": 0,
            "nome": "Planoeplano",
            "codigo": "PLPL3"
        },
        {
            "id": 0,
            "nome": "Plascar Part",
            "codigo": "PLAS3"
        },
        {
            "id": 0,
            "nome": "Pomifrutas",
            "codigo": "FRTA3"
        },
        {
            "id": 0,
            "nome": "Porto Seguro S.A.",
            "codigo": "PSSA3"
        },
        {
            "id": 0,
            "nome": "Porto Vm",
            "codigo": "PSVM11"
        },
        {
            "id": 0,
            "nome": "Portobello",
            "codigo": "PTBL3"
        },
        {
            "id": 0,
            "nome": "Positivo Tec",
            "codigo": "POSI3"
        },
        {
            "id": 0,
            "nome": "Ppla",
            "codigo": "PPLA11"
        },
        {
            "id": 0,
            "nome": "Priner",
            "codigo": "PRNR3"
        },
        {
            "id": 0,
            "nome": "Profarma",
            "codigo": "PFRM3"
        },
        {
            "id": 0,
            "nome": "Qualicorp Consultoria e Corretora de Seguros S.A.",
            "codigo": "QUAL3"
        },
        {
            "id": 0,
            "nome": "Quero Quero",
            "codigo": "LJQQ3"
        },
        {
            "id": 0,
            "nome": "Raia Drogasil S.A.",
            "codigo": "RADL3"
        },
        {
            "id": 0,
            "nome": "Randon Part",
            "codigo": "RAPT3"
        },
        {
            "id": 0,
            "nome": "Randon Part",
            "codigo": "RAPT4"
        },
        {
            "id": 0,
            "nome": "Recrusul",
            "codigo": "RCSL3"
        },
        {
            "id": 0,
            "nome": "Recrusul",
            "codigo": "RCSL4"
        },
        {
            "id": 0,
            "nome": "Rede D Or",
            "codigo": "RDOR3"
        },
        {
            "id": 0,
            "nome": "Rede Energia",
            "codigo": "REDE3"
        },
        {
            "id": 0,
            "nome": "Renova",
            "codigo": "RNEW11"
        },
        {
            "id": 0,
            "nome": "Renova",
            "codigo": "RNEW3"
        },
        {
            "id": 0,
            "nome": "Renova",
            "codigo": "RNEW4"
        },
        {
            "id": 0,
            "nome": "Riosulense",
            "codigo": "RSUL4"
        },
        {
            "id": 0,
            "nome": "Rni",
            "codigo": "RDNI3"
        },
        {
            "id": 0,
            "nome": "Rossi Resid",
            "codigo": "RSID3"
        },
        {
            "id": 0,
            "nome": "Rumo S.A.",
            "codigo": "RAIL3"
        },
        {
            "id": 0,
            "nome": "Sanepar",
            "codigo": "SAPR11"
        },
        {
            "id": 0,
            "nome": "Sanepar",
            "codigo": "SAPR3"
        },
        {
            "id": 0,
            "nome": "Sanepar",
            "codigo": "SAPR4"
        },
        {
            "id": 0,
            "nome": "Sansuy",
            "codigo": "SNSY3"
        },
        {
            "id": 0,
            "nome": "Sansuy",
            "codigo": "SNSY5"
        },
        {
            "id": 0,
            "nome": "Sansuy",
            "codigo": "SNSY6"
        },
        {
            "id": 0,
            "nome": "Santander Br",
            "codigo": "SANB4"
        },
        {
            "id": 0,
            "nome": "Santanense",
            "codigo": "CTSA3"
        },
        {
            "id": 0,
            "nome": "Santanense",
            "codigo": "CTSA4"
        },
        {
            "id": 0,
            "nome": "Santos Brp",
            "codigo": "STBP3"
        },
        {
            "id": 0,
            "nome": "Sao Carlos",
            "codigo": "SCAR3"
        },
        {
            "id": 0,
            "nome": "Sao Martinho",
            "codigo": "SMTO3"
        },
        {
            "id": 0,
            "nome": "Saraiva Livr",
            "codigo": "SLED3"
        },
        {
            "id": 0,
            "nome": "Saraiva Livr",
            "codigo": "SLED4"
        },
        {
            "id": 0,
            "nome": "Schulz",
            "codigo": "SHUL4"
        },
        {
            "id": 0,
            "nome": "Seg Al Bahia",
            "codigo": "CSAB3"
        },
        {
            "id": 0,
            "nome": "Seg Al Bahia",
            "codigo": "CSAB4"
        },
        {
            "id": 0,
            "nome": "Sequoia Log",
            "codigo": "SEQL3"
        },
        {
            "id": 0,
            "nome": "Ser Educa",
            "codigo": "SEER3"
        },
        {
            "id": 0,
            "nome": "Simpar",
            "codigo": "SIMH3"
        },
        {
            "id": 0,
            "nome": "Sinqia S.A.",
            "codigo": "SQIA3"
        },
        {
            "id": 0,
            "nome": "Slc Agricola",
            "codigo": "SLCE3"
        },
        {
            "id": 0,
            "nome": "Smiles Fidelidade S.A.",
            "codigo": "SMLS3"
        },
        {
            "id": 0,
            "nome": "Sondotecnica",
            "codigo": "SOND3"
        },
        {
            "id": 0,
            "nome": "Sondotecnica",
            "codigo": "SOND5"
        },
        {
            "id": 0,
            "nome": "Sondotecnica",
            "codigo": "SOND6"
        },
        {
            "id": 0,
            "nome": "Springs",
            "codigo": "SGPS3"
        },
        {
            "id": 0,
            "nome": "Spturis",
            "codigo": "AHEB3"
        },
        {
            "id": 0,
            "nome": "Spturis",
            "codigo": "AHEB5"
        },
        {
            "id": 0,
            "nome": "Spturis",
            "codigo": "AHEB6"
        },
        {
            "id": 0,
            "nome": "Sul America",
            "codigo": "SULA11"
        },
        {
            "id": 0,
            "nome": "Sul America",
            "codigo": "SULA3"
        },
        {
            "id": 0,
            "nome": "Sul America",
            "codigo": "SULA4"
        },
        {
            "id": 0,
            "nome": "Suzano S.A.",
            "codigo": "SUZB3"
        },
        {
            "id": 0,
            "nome": "TaeSA",
            "codigo": "TAEE3"
        },
        {
            "id": 0,
            "nome": "TaeSA",
            "codigo": "TAEE4"
        },
        {
            "id": 0,
            "nome": "Taurus Armas",
            "codigo": "TASA3"
        },
        {
            "id": 0,
            "nome": "Taurus Armas S.A.",
            "codigo": "TASA4"
        },
        {
            "id": 0,
            "nome": "Technos",
            "codigo": "TECN3"
        },
        {
            "id": 0,
            "nome": "Tecnisa S.A.",
            "codigo": "TCSA3"
        },
        {
            "id": 0,
            "nome": "Tecnosolo",
            "codigo": "TCNO3"
        },
        {
            "id": 0,
            "nome": "Tecnosolo",
            "codigo": "TCNO4"
        },
        {
            "id": 0,
            "nome": "Tegma",
            "codigo": "TGMA3"
        },
        {
            "id": 0,
            "nome": "Teka",
            "codigo": "TEKA3"
        },
        {
            "id": 0,
            "nome": "Teka",
            "codigo": "TEKA4"
        },
        {
            "id": 0,
            "nome": "Tekno",
            "codigo": "TKNO4"
        },
        {
            "id": 0,
            "nome": "Telebras",
            "codigo": "TELB3"
        },
        {
            "id": 0,
            "nome": "Telebras",
            "codigo": "TELB4"
        },
        {
            "id": 0,
            "nome": "Telef Brasil",
            "codigo": "VIVT3"
        },
        {
            "id": 0,
            "nome": "Telefônica Brasil S.A.",
            "codigo": "VIVT4"
        },
        {
            "id": 0,
            "nome": "Tenda",
            "codigo": "TEND3"
        },
        {
            "id": 0,
            "nome": "Terra Santa",
            "codigo": "TESA3"
        },
        {
            "id": 0,
            "nome": "Tex Renaux",
            "codigo": "TXRX3"
        },
        {
            "id": 0,
            "nome": "TIM S.A.",
            "codigo": "TIMS3"
        },
        {
            "id": 0,
            "nome": "Time For Fun",
            "codigo": "SHOW3"
        },
        {
            "id": 0,
            "nome": "TOTVS S.A.",
            "codigo": "TOTS3"
        },
        {
            "id": 0,
            "nome": "Track Field",
            "codigo": "TFCO4"
        },
        {
            "id": 0,
            "nome": "Tran Paulist",
            "codigo": "TRPL3"
        },
        {
            "id": 0,
            "nome": "Tran Paulist",
            "codigo": "TRPL4"
        },
        {
            "id": 0,
            "nome": "Transmissora Aliança de Energia Elétrica S.A.",
            "codigo": "TAEE11"
        },
        {
            "id": 0,
            "nome": "TreviSA",
            "codigo": "LUXM4"
        },
        {
            "id": 0,
            "nome": "Trisul",
            "codigo": "TRIS3"
        },
        {
            "id": 0,
            "nome": "Triunfo Part",
            "codigo": "TPIS3"
        },
        {
            "id": 0,
            "nome": "Tupy",
            "codigo": "TUPY3"
        },
        {
            "id": 0,
            "nome": "Ultrapar Participações S.A.",
            "codigo": "UGPA3"
        },
        {
            "id": 0,
            "nome": "UnicaSA",
            "codigo": "UCAS3"
        },
        {
            "id": 0,
            "nome": "Unipar",
            "codigo": "UNIP3"
        },
        {
            "id": 0,
            "nome": "Unipar",
            "codigo": "UNIP5"
        },
        {
            "id": 0,
            "nome": "Unipar",
            "codigo": "UNIP6"
        },
        {
            "id": 0,
            "nome": "Usiminas",
            "codigo": "USIM3"
        },
        {
            "id": 0,
            "nome": "Usiminas",
            "codigo": "USIM6"
        },
        {
            "id": 0,
            "nome": "Usinas Siderúrgicas de Minas Gerais S.A.",
            "codigo": "USIM5"
        },
        {
            "id": 0,
            "nome": "Vale S.A.",
            "codigo": "VALE3"
        },
        {
            "id": 0,
            "nome": "Valid Solucoes S.A.",
            "codigo": "VLID3"
        },
        {
            "id": 0,
            "nome": "Vamos",
            "codigo": "VAMO3"
        },
        {
            "id": 0,
            "nome": "Via Varejo S.A.",
            "codigo": "VVAR3"
        },
        {
            "id": 0,
            "nome": "Vinci Logistica Fundo Investimento Imobiliario FII",
            "codigo": "VILG11"
        },
        {
            "id": 0,
            "nome": "Vivara Participacoes S.A.",
            "codigo": "VIVA3"
        },
        {
            "id": 0,
            "nome": "Viver",
            "codigo": "VIVR3"
        },
        {
            "id": 0,
            "nome": "Vulcabras",
            "codigo": "VULC3"
        },
        {
            "id": 0,
            "nome": "WEG S.A.",
            "codigo": "WEGE3"
        },
        {
            "id": 0,
            "nome": "Westwing",
            "codigo": "WEST3"
        },
        {
            "id": 0,
            "nome": "Wetzel S/A",
            "codigo": "MWET3"
        },
        {
            "id": 0,
            "nome": "Wetzel S/A",
            "codigo": "MWET4"
        },
        {
            "id": 0,
            "nome": "Whirlpool",
            "codigo": "WHRL3"
        },
        {
            "id": 0,
            "nome": "Whirlpool",
            "codigo": "WHRL4"
        },
        {
            "id": 0,
            "nome": "Wilson Sons",
            "codigo": "WSON33"
        },
        {
            "id": 0,
            "nome": "Wiz Solucoes e Corretagem de Seguros S.A.",
            "codigo": "WIZS3"
        },
        {
            "id": 0,
            "nome": "Wlm Ind Com",
            "codigo": "WLMM3"
        },
        {
            "id": 0,
            "nome": "Wlm Ind Com",
            "codigo": "WLMM4"
        }
    ]

}
