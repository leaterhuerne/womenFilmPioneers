import json

def get_database():
    with open("database.json", "r") as file:
        return json.loads(file.read())


def iterate(function):
    database = get_database()
    result = {}
    for entry in database:
        function(database, entry, result)
    return result

def countProfessions():
    print("Loading database...")
    database = get_database()
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
    return json.dumps(result, indent = 4)





def main():
    print(countProfessions())


if __name__ == "__main__":
    main()

