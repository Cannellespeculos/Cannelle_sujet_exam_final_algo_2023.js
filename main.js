import './style.css'



// EXO 1 :
// Écrivez une fonction qui prend deux nombres en argument
// et retourne vrai si le premier est supérieur au deuxieme ou faux dans le cas contraire
// f(4,2) retourne true
// f(4,7) retourne false

export function FirstOrSecond(firstnum, secondnum) {
    if (firstnum > secondnum) {
        return true
    } else {
        return false
    }
}


// EXO 2 :
// Implémentez une fonction pour inverser une chaîne de caractères.
// Vous ne devez pas utiliser la méthode reverse
// f("test") retourne "tset"

export function reverse(string) {
    let reversed = ""
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i]

    }

    return reversed
}

console.log(reverse("test"))



// EXO 3 :
// Un palindrome est un mot qui se lit dans les deux sens ("kayak")
// Écrivez un algorithme pour vérifier si une chaîne de caractères donnée est un palindrome.
// f("kayak") retourne true
// f("test") retourne false

export function palindrome(n) {
    if (reverse(n) === n) {
        return true
    } else {
        return false
    }
}


// EXO 4 :
// Créez une fonction qui retourne le factoriel d'un nombre passé en argument.
// f(5) retourne 120

export function factoriel(num) {
    let total = 0
    for (let i = 1; i <= num; i++) {
        total += i * (i + 1)

    }
    return total
}


// EXO 5 :
// Implémentez une fonction pour vérifier si un nombre est premier.
// Un nombre premier est un nombre qui est divisible uniquement par 1 ou par lui même
// f(11) retourne true
// f(20) retourne false

export function premier(num) {
    let index = 1;
    while (num <= 10) {
        if (num % index === 0) {
            return false
        }
        index++
    }

    return true
}

// EXO 6 :
// Écrire une fonction qui renvoie le plus grand nombre dans un tableau.
// Vous ne devez pas utiliser de boucle

// EXO 7 :
// Un anagramme est une phrase composée des même lettres qu'une autre phrase dans un ordre différent
// "La crise économique" et "Le scénario comique" sont des anagrammes
// Écrivez une fonction retourne vrai si deux chaînes de caractères sont des anagrammes l'une de l'autre ou faux dans le cas contraire.
// https://fr.wikipedia.org/wiki/Anagramme

// EXO 8 :
// Écrivez une fonction pour déterminer si une chaîne de caractères donnée ne contient que des caractères uniques.
// f("test") retourne faux car le caractère t est présente 2 fois
// f("hopital") retourne vrai car chaque caractère est présent 1 seule fois
// f("Test") retourne vrai car chaque caractère est présent 1 seule fois (t n'est pas pareil que T)

export function unique(stri) {
    let test = ""
    for (let i = 0; i < stri.length; i++) {
        if (!test.includes(stri[i])) {
            test += stri[i]
        } else {
            return false
            break
        }

    }

    return true
}

// EXO 9 :
// Implémentez une fonction qui retourne le deuxieme plus grand élément d'un tableau de nombre entier.
// f([5,6,2,9,23]) retourne 9 car 23 est le plus grand et 9 est le deuxieme plus grand

// EXO 10 :
// Écrivez une fonction pour calculer la somme de tous les nombres pairs d'un tableau.
// f([3,2,6]) retoune 8 (2+6)

export function sumPair(array) {
    let total = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            total += array[i]
        }

    }
    return total
}


// EXO 11 :
// Créez une fonction pour inverser l'ordre des mots dans une phrase.
// Vous pouvez utliser les méthode disponible dans les prototypes String et Array
// f("bonjour je vais bien") affiche "bien vais je bonjour"
// la fonction ne retourne rien

export function reverseOrder(string) {
    let result = "";
    let word = ""

    for (let i = string.length; i >= 0; i--) {
        if (string[i] !== " ") {
            word += string[i]
        } else if (string[i] === " " || i === 0) {
            result += reverse(word)
            result += string[i]
            word = ""
        }

    }

    return result
}

reverseOrder("oui et toi")


// EXO 12 :
// Implémentez une fonction pour supprimer toutes les occurrences d'un élément donné d'un tableau.
// f([3,5,7,3,1,3,5], 3) retourne  [5,7,1,5] car on a supprimer tout les 3 (deuxieme argument)
// Vous devez utiliser la méthode filter()

export function filter(array, number) {
    return array.filter(num => num != number)

}
// console.log(filter([3, 5, 7, 3, 1, 3, 5], 3))


// EXO 13
// Écrivez un algorithme pour trouver le nombre de voyelles dans une chaîne de caractères.
// f("bonjour") retourne 3 car il y 1 "a", 2 "o" et un "u"
// f("voyage") retourne 3 car il y a 1 "e", 1 "a" et 1 "o"

export function Voyelles(string) {
    let Arrayvoyelles = ["a", "e", "i", "o", "u", "y"]
    let total = 0;
    for (let i = 0; i < string.length; i++) {
        if (Arrayvoyelles.includes(string[i])) {
            total++
        }

    }

    return total
}

// EXO 14
// Implémentez une fonction qui permet de trouver le plus petit nombre
// d'un tableau à 2 dimensions passé en argument
// ex: f([[1,2,3],[5,6,7],[39,-23,0]]) retourne -23

export function twoDimensions(array) {
    let first = array[0]
    let little = first[0]

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        for (let j = 0; j < element.length; j++) {

            if (element[j] < little) {
                little = element[j]
            }

        }

    }

    return little
}

// console.log(twoDimensions([[1, 2, 3], [5, 6, 7], [39, -23, 0]]))

// EXO 15
// Implémentez une fonction pour rechercher tous les index d'un nombre donné (premier argument)
// dans un tableau de nombre entier (deuxieme argument).
// f(3,[3,5,3,6]) retourne [0,2] car le 3 est présent à l'index 0 et à l'index 2

export function index(num, array) {
    let numIndex = [];

    for (let i = 0; i < array.length; i++) {
        if (num === array[i]) {
            numIndex.push(i)
        }

    }
    return numIndex

}


// EXO 16
// Implémentez une fonction pour calculer le nombre de chiffres d'un nombre entier.
// f(102543) retourne 6 car 102543 contient 6 chiffres

export function sum(num) {
    let numString = num + ""
    let total = 0
    for (let i = 0; i < numString.length; i++) {
        total++

    }
    return total
}

