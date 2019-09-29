const readline = require('readline-sync')

function start() {
    const content = {}

    content.searchTerm = askAndReturnSeachTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSeachTerm() {
        return readline.question('Digite o termo a ser pesquisado na wikipedia: ')
    }

    function askAndReturnPrefix() {
      const prefixes = ['Quem e', 'O que e', 'A historia de']
      const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Escolha uma opção: ')
      const selectedPrefixText = prefixes[selectedPrefixIndex]
      
      return selectedPrefixText
    }
    console.log(content)
}

start()