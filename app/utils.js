function generateCorrelative(counter) {
    return counter.toString().padStart(8, '0');
}

export function generatorOBJ(counter) {

    return {
        "personaId": "658e0a4de6bd2d0014dbc12f",
        "personaToken": "PRD_dDNa2wl4BqFPpRxGbxFlvzbNZOGc6AH2kmCtQg2iub01uJ99e1PPubznmXrC4bGh",
        "fileName": `20552103816-03-B001-${generateCorrelative(counter)}`,
        "documentBody": {
            "cbc:UBLVersionID": {
                "_text": "2.1"
            },
            "cbc:CustomizationID": {
                "_text": "2.0"
            },
            "cbc:ID": {
                "_text": `B001-${generateCorrelative(counter)}`
            },
            "cbc:IssueDate": {
                "_text": "2023-12-28"
            },
            "cbc:IssueTime": {
                "_text": "19:04:00"
            },
            "cbc:InvoiceTypeCode": {
                "_attributes": {
                    "listID": "0101"
                },
                "_text": "03"
            },
            "cbc:Note": [
                {
                    "_text": "CUATROCIENTOS SETENTA Y DOS CON 00/100 SOLES",
                    "_attributes": {
                        "languageLocaleID": "1000"
                    }
                }
            ],
            "cbc:DocumentCurrencyCode": {
                "_text": "PEN"
            },
            "cac:AccountingSupplierParty": {
                "cac:Party": {
                    "cac:PartyIdentification": {
                        "cbc:ID": {
                            "_attributes": {
                                "schemeID": "6"
                            },
                            "_text": "20552103816"
                        }
                    },
                    "cac:PartyName": {
                        "cbc:Name": {
                            "_text": "PRUEBA JUNIOR"
                        }
                    },
                    "cac:PartyLegalEntity": {
                        "cbc:RegistrationName": {
                            "_text": "AGROLIGHT PERU S.A.C. PRUEBA"
                        },
                        "cac:RegistrationAddress": {
                            "cbc:AddressTypeCode": {
                                "_text": "0000"
                            },
                            "cac:AddressLine": {
                                "cbc:Line": {
                                    "_text": "PJ. JORGE BASADRE NRO. 158 URB. POP LA UNIVERSAL 2DA ET. SANTA ANITA LIMA LIMA"
                                }
                            }
                        }
                    }
                }
            },
            "cac:AccountingCustomerParty": {
                "cac:Party": {
                    "cac:PartyIdentification": {
                        "cbc:ID": {
                            "_attributes": {
                                "schemeID": "1"
                            },
                            "_text": "74100532"
                        }
                    },
                    "cac:PartyLegalEntity": {
                        "cbc:RegistrationName": {
                            "_text": "HIDETOCHI JUNIOR RODRIGUEZ SANDOVAL"
                        },
                        "cac:RegistrationAddress": {
                            "cac:AddressLine": {
                                "cbc:Line": {
                                    "_text": "JR. PABLO NERUDA COOP. EL AYLLU MZ. A LT. 19 CALLAO PROV. CONST. DEL CALLAO PROV. CONST. DEL CALLAO"
                                }
                            }
                        }
                    }
                }
            },
            "cac:TaxTotal": {
                "cbc:TaxAmount": {
                    "_attributes": {
                        "currencyID": "PEN"
                    },
                    "_text": 72
                },
                "cac:TaxSubtotal": [
                    {
                        "cbc:TaxableAmount": {
                            "_attributes": {
                                "currencyID": "PEN"
                            },
                            "_text": 400
                        },
                        "cbc:TaxAmount": {
                            "_attributes": {
                                "currencyID": "PEN"
                            },
                            "_text": 72
                        },
                        "cac:TaxCategory": {
                            "cac:TaxScheme": {
                                "cbc:ID": {
                                    "_text": "1000"
                                },
                                "cbc:Name": {
                                    "_text": "IGV"
                                },
                                "cbc:TaxTypeCode": {
                                    "_text": "VAT"
                                }
                            }
                        }
                    }
                ]
            },
            "cac:LegalMonetaryTotal": {
                "cbc:LineExtensionAmount": {
                    "_attributes": {
                        "currencyID": "PEN"
                    },
                    "_text": 400
                },
                "cbc:TaxInclusiveAmount": {
                    "_attributes": {
                        "currencyID": "PEN"
                    },
                    "_text": 472
                },
                "cbc:PayableAmount": {
                    "_attributes": {
                        "currencyID": "PEN"
                    },
                    "_text": 472
                }
            },
            "cac:InvoiceLine": [
                {
                    "cbc:ID": {
                        "_text": 1
                    },
                    "cbc:InvoicedQuantity": {
                        "_attributes": {
                            "unitCode": "NIU"
                        },
                        "_text": 20
                    },
                    "cbc:LineExtensionAmount": {
                        "_attributes": {
                            "currencyID": "PEN"
                        },
                        "_text": 400
                    },
                    "cac:PricingReference": {
                        "cac:AlternativeConditionPrice": {
                            "cbc:PriceAmount": {
                                "_attributes": {
                                    "currencyID": "PEN"
                                },
                                "_text": 23.6
                            },
                            "cbc:PriceTypeCode": {
                                "_text": "01"
                            }
                        }
                    },
                    "cac:TaxTotal": {
                        "cbc:TaxAmount": {
                            "_attributes": {
                                "currencyID": "PEN"
                            },
                            "_text": 72
                        },
                        "cac:TaxSubtotal": [
                            {
                                "cbc:TaxableAmount": {
                                    "_attributes": {
                                        "currencyID": "PEN"
                                    },
                                    "_text": 400
                                },
                                "cbc:TaxAmount": {
                                    "_attributes": {
                                        "currencyID": "PEN"
                                    },
                                    "_text": 72
                                },
                                "cac:TaxCategory": {
                                    "cbc:Percent": {
                                        "_text": 18
                                    },
                                    "cbc:TaxExemptionReasonCode": {
                                        "_text": "10"
                                    },
                                    "cac:TaxScheme": {
                                        "cbc:ID": {
                                            "_text": "1000"
                                        },
                                        "cbc:Name": {
                                            "_text": "IGV"
                                        },
                                        "cbc:TaxTypeCode": {
                                            "_text": "VAT"
                                        }
                                    }
                                }
                            }
                        ]
                    },
                    "cac:Item": {
                        "cbc:Description": {
                            "_text": "PRUEBA"
                        }
                    },
                    "cac:Price": {
                        "cbc:PriceAmount": {
                            "_attributes": {
                                "currencyID": "PEN"
                            },
                            "_text": 20
                        }
                    }
                }
            ]
        }
    }
}