const { Version, ProgrammingLanguage } = require('../models/programming_language')

const copyRight = `/*
*   Online compiler IDE
*   Write, Edit and Run code with your team.
*/

`;

const copyRightForPython = `"""
    Online compiler IDE
    Write, Edit and Run code with your team.
"""

`;

class TemplateClient {
   _createTemplate(helloWorldProgram, isPython = false) {
      if (isPython) return copyRightForPython + helloWorldProgram;
      return copyRight + helloWorldProgram;
   }

   getTemplate(languageCode) {
      if (languageCode in this.templates) return this.templates[languageCode];
      return null;
   }

   templates = {
      java: this._createTemplate(
         `
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Welcome to Programiz!"); 
    }
}
                `
      ),
      c: this._createTemplate(
         `
#include<stdio.h>

int main() {
    printf("Welcome to Programiz!");
    return 0;
}
                `
      ),
      cpp: this._createTemplate(
         `
#include <iostream>
using namespace std;

int main() {
    cout << "Welcome to Programiz!";
    return 0;
}
                `
      ),
      cpp14: this._createTemplate(
         `
#include <iostream>
using namespace std;

int main() {
    cout << "Welcome to Programiz!";
}`
      ),
      cpp17: this._createTemplate(
         `
#include <iostream>
using namespace std;

int main() {
    cout << "Welcome to Programiz!";
}`
      ),
      python2: this._createTemplate(
         `
print('Welcome to Programiz!')
                `,
         true
      ),
      python3: this._createTemplate(
         `
print('Welcome to Programiz!')
                `,
         true
      ),
      go: this._createTemplate(
         `
package main

import "fmt"

func main() {
    fmt.Println("Welcome to Programiz!")
}
                `
      ),
      csharp: this._createTemplate(
         `
using System;

namespace HelloWorld {
    class Program {
        static void Main(string[] args) {
            Console.WriteLine("Welcome to Programiz!");
        }
    }
}
                `
      ),
      swift: this._createTemplate(
         `
print("Welcome to Programiz!") 
                `
      ),
      dart: this._createTemplate(
         `
void main() {
    print("Welcome to Programiz!");
}
                `
      ),
      nodejs: this._createTemplate(
         `
console.log('Welcome to Programiz!')
                `
      ),
      kotlin: this._createTemplate(
         `
fun main(args : Array<String>) {
    println("Welcome to Programiz!")
}
                `
      ),
   };
}

class PLClient {
    constructor() {
        if (PLClient._instance) {
            return PLClient._instance
        }
        PLClient._instance = this
    }

    templateClient = new TemplateClient()

    languages = [
        new ProgrammingLanguage('Java', 'java', [new Version('JDK 11.0.4', 3), new Version('JDK 17.0.1', 4)], this.templateClient.getTemplate('java')),

        new ProgrammingLanguage('C', 'c', [new Version('GCC 9.1.0', 4), new Version('GCC 11.1.0', 5)], this.templateClient.getTemplate('c')),

        new ProgrammingLanguage('C++', 'cpp', [new Version('GCC 9.1.0', 4), new Version('GCC 11.1.0', 5)], this.templateClient.getTemplate('cpp')),

        new ProgrammingLanguage('C++ 14', 'cpp14', [new Version('g++ 14 GCC 9.1.0', 3), new Version('GCC 11.1.0', 4)], this.templateClient.getTemplate('cpp14')),

        new ProgrammingLanguage('C++ 17', 'cpp17', [new Version('g++ 17 GCC 9.1.0', 0), new Version('GCC 11.1.0', 1)], this.templateClient.getTemplate('cpp17')),

        new ProgrammingLanguage('Python 2', 'python2', [new Version('2.7.16', 2), new Version('2.7.18', 3)], this.templateClient.getTemplate('python2')),

        new ProgrammingLanguage('Python 3', 'python3', [new Version('3.7.4', 3), new Version('3.9.9', 4)], this.templateClient.getTemplate('python3')),

        new ProgrammingLanguage('GO Lang', 'go', [new Version('1.13.1', 3), new Version('1.17.3', 4)], this.templateClient.getTemplate('go')),

        new ProgrammingLanguage('C#', 'csharp', [new Version('mono 6.0.0', 3), new Version('mono-6.12.0', 4)], this.templateClient.getTemplate('csharp')),

        new ProgrammingLanguage('Swift', 'swift', [new Version('5.1', 3), new Version('5.5', 4)], this.templateClient.getTemplate('swift')),

        new ProgrammingLanguage('Dart', 'dart', [new Version('2.5.1', 3), new Version('2.14.4', 4)], this.templateClient.getTemplate('dart')),

        new ProgrammingLanguage('NodeJS', 'nodejs', [new Version('12.11.1', 3), new Version('17.1.0', 4)], this.templateClient.getTemplate('nodejs')),

        new ProgrammingLanguage('Kotlin', 'kotlin', [new Version('1.3.50 (JRE 11.0.4)', 2), new Version('1.6.0 (JRE 17.0.1+12)', 3)], this.templateClient.getTemplate('kotlin')),
    ]

    findLanguage(languageName) {
        return this.languages.find((value) => value.name === languageName)
    }

    findVersionIndex(language, versionName) {
        return language.versions.findIndex((value) => value.name === versionName)
    }

    findVersion(language, versionName) {
        return language.versions.find((value) => value.name === versionName)
    }
}

module.exports.PLClient = PLClient