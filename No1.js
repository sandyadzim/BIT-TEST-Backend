function splitString(input){
    const caseString = ['pro', 'gram', 'merit', 'program', 'it', 'programmer']
    return caseString.filter(result => input.includes(result))
  }
  console.log(splitString('programit'))
  console.log(splitString('programmerit'))