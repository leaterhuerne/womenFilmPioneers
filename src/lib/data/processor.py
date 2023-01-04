import json

def get_database():
    with open("databse.json", "r") as file:
        return json.loads(file.read())


def iterate(function):
    database = get_database()
    result = {}
    for entry in database:
        function(entry, result)
    return result


def main():
    pass


if __name__ == "__main__":
    main()

