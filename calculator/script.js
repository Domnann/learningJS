class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clearAll()
    }
    clearAll() {
        
    }
}

const numBtn = document.querySelectorAll('[data-number]')
const operationBtn = document.querySelectorAll('[data-operation]')
const equalsBtn = document.querySelectorAll('[data-equals]')
const clearBtn = document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement= document.querySelectorAll('[previous-output]')
const currentOperandTextElement = document.querySelectorAll('[current-output]')