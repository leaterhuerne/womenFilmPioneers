import json

def get_database(database):
    with open(database, "r") as file:
        return json.loads(file.read())


def iterate(function):
    database = get_database()
    result = {}
    for entry in database:
        function(database, entry, result)
    return result

def countProfessions(database):
    print("Loading database...")
    database = get_database(database)
    print("Database loaded. Number of entries: " + str(len(database)))
    result = {}
    for entry in database:
        if database[entry]["person"]["Geschlecht"] == "W":
            gender = "female"
        elif database[entry]["person"]["Geschlecht"] == "M":
            gender = "male"
        else:
            gender = "unknown"

        for profession in database[entry]["person"]["Taetigkeiten"]:
            if not profession in result:
                result[profession] = {
                    "female": 1 if gender == "female" else 0,
                    "male": 1 if gender == "male" else 0,
                    "unknown": 1 if gender == "unknown" else 0
                }
            else:
                result[profession][gender] += 1
    with open("professions.json", "w") as file:
        file.write(json.dumps(dict(sorted(result.items())), indent = 4))

def regex():
    print("Loading database...")
    database = get_database("database.json")
    print("Database loaded. Number of entries: " + str(len(database)))
    for entry in database:
        profession_list = []
        for profession in database[entry]["person"]["Taetigkeiten"]:
            if profession == "Darsteller" or profession == "Darstellerin" or profession == "Dastellerin":
                profession_list.append("DarstellerIn")
            elif profession == "Architekt":
                profession_list.append("ArchitektIn")
            elif profession == "Architekturkritiker":
                profession_list.append("ArchitekturkritikerIn")
            elif profession == "Archivar":
                profession_list.append("ArchivarIn")
            elif profession == "Arzt":
                profession_list.append("AerztIn")
            elif profession == "Auftraggeber":
                profession_list.append("AuftraggeberIn")
            elif profession == "Bankier":
                profession_list.append("BankierIn")
            elif profession == "Beleuchter":
                profession_list.append("BeleuchterIn")
            elif profession == "Bildhauer":
                profession_list.append("BildhauerIn")
            elif profession == "Co-Produzent":
                profession_list.append("Co-ProduzentIn")
            elif profession == "Diplom-Landwirt":
                profession_list.append("Diplom-LandwirtIn")
            elif profession == "Diplomat":
                profession_list.append("DiplomatIn")
            elif profession == "Dirigent":
                profession_list.append("DirigentIn")
            elif profession == "Drehbusch":
                profession_list.append("Drehbuch")
            elif profession == "Erfinder":
                profession_list.append("ErfinderIn")
            elif profession == "Ethnologe":
                profession_list.append("EthnologIn")
            elif profession == "Filmhistoriker":
                profession_list.append("FilmhistorikerIn")
            elif profession == "Filmkritiker":
                profession_list.append("FilmkritikerIn")
            elif profession == "Flugpionier":
                profession_list.append("FlugpionierIn")
            elif profession == "Funktionaer":
                profession_list.append("FunktionaerIn")
            elif profession == "Gartenarchitekt":
                profession_list.append("GartenarchitektIn")
            elif profession == "Geiger":
                profession_list.append("GeigerIn")
            elif profession == "Geistlicher":
                profession_list.append("Geistliche")
            elif profession == "Gouverneur":
                profession_list.append("GouverneurIn")
            elif profession == "Grafiker" or profession == "Grafikerin":
                profession_list.append("GrafikerIn")
            elif profession == "Handwerker":
                profession_list.append("HandwerkerIn")
            elif profession == "Ingenieur":
                profession_list.append("IngenieurIn")
            elif profession == "Journalist" or profession == "Journalistin":
                profession_list.append("JournalistIn")
            elif profession == "Jurist":
                profession_list.append("JuristIn")
            elif profession == "Kampfflieger":
                profession_list.append("KampffliegerIn")
            elif profession == "Kanera-Assistenz":
                profession_list.append("Kamera-Assistenz")

            elif profession == "Kinobetreiber":
                profession_list.append("KinobetreiberIn")
            elif profession == "Komponist" or profession == "Komponistin":
                profession_list.append("KomponistIn")
            elif profession == "Kulturschaffender":
                profession_list.append("Kulturschaffende")
            elif profession == "Kunsthistoriker":
                profession_list.append("KunsthistorikerIn")
            elif profession == "K\u00fcnstler" or profession == "K\u00fcnstlerin":
                profession_list.append("KünstlerIn")
            elif profession == "Landwirtschaftstechniker":
                profession_list.append("LandwirtschaftstechnikerIn")
            elif profession == "Liedtexte":
                profession_list.append("Liedtext")
            elif profession == "Luftfahrtingenieur":
                profession_list.append("LuftfahrtingenieurIn")
            elif profession == "Luftfahrtpionier":
                profession_list.append("LuftfahrtpionierIn")
            elif profession == "Maler":
                profession_list.append("MalerIn")
            elif profession == "Mitarbeit":
                profession_list.append("Mitwirkung")
            elif profession == "Moderator":
                profession_list.append("ModeratorIn")
            elif profession == "Musiker":
                profession_list.append("MusikerIn")
            elif profession == "Neurologe":
                profession_list.append("NeurologIn")
            elif profession == "Okkultist":
                profession_list.append("OkkultistIn")
            elif profession == "Photograph":
                profession_list.append("Fotografie")
            elif profession == "Poduzentin" or profession == "Produzent" or profession == "Produzentin" or profession == "Filmemacher" or profession == "Filmemacherin":
                profession_list.append("ProduzentIn")
            elif profession == "Politiker" or profession == "Politikerin":
                profession_list.append("PolitikerIn")
            elif profession == "Prodution. Darsteller":
                profession_list.append("DarstellerIn")
            elif profession == "Redakteur":
                profession_list.append("RedakteurIn")
            elif profession == "Regisseur":
                profession_list.append("RegisseurIn")
            elif profession == "Schauspielerin":
                profession_list.append("DarstellerIn")
            elif profession == "Schriftsteller":
                profession_list.append("SchriftstellerIn")
            elif profession == "Sportler" or profession == "Sportlerin":
                profession_list.append("SportlerIn")
            elif profession == "Sprecher" or profession == "Sprecherin":
                profession_list.append("SprecherIn")
            elif profession == "Synchronsprecher" or profession == "Synchronsprecherin":
                profession_list.append("SynchronsprecherIn")
            elif profession == "S\u00e4nger" or profession == "S\u00e4ngerin" or profession == "Gesang":
                profession_list.append("SängerIn")
            elif profession == "Textilfabrikant":
                profession_list.append("TextilfabrikantIn")
            elif profession == "Tischlermeister":
                profession_list.append("TischlermeisterIn")
            elif profession == "Trickfilmzeichner":
                profession_list.append("TrickfilmzeichnerIn")
            elif profession == "T\u00e4nzerin" or profession == "Tanz" or profession == "Tangot\u00e4nzerin":
                profession_list.append("TänzerIn")
            elif profession == "Unternehmer":
                profession_list.append("UnternehmerIn")
            elif profession == "Wirtschaftsf\u00fchrer":
                profession_list.append("Wirtschaftsf\u00fchrerIn")
            elif profession == "Wissenschaftler" or profession == "Wissenschaftlerin":
                profession_list.append("WissenschaftlerIn")
            else:
                profession_list.append(profession)
        print(profession_list)
        database[entry]["person"]["Taetigkeiten"] = profession_list
    print("Writing database...")
    with open("databaseProfessions.json", "w") as file:
        file.write(json.dumps(database, indent=4))




def main():
    regex()
    # print(countProfessions("databaseProfessions.json"))


if __name__ == "__main__":
    main()
