


function timeWord(time) {

    let newHour = time.split('-')
    let mm = Number(newHour[1].split('')[1])
    let m = Number(newHour[1].split('')[0])
    let currentHour = Number(newHour[0])
    let currentMinute = Number(newHour[1])

    let output = "0"

    let hours = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"]
    let minutes = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "ninteen",]
    let day = ["am", "pm"]
    let newMM = ["ten", "twenty", "thiry", "fourty", "fifty"]

    if(currentHour > 12){
        currentHour = currentHour - 12
    }

    if (currentHour < 12) {
        day = day[0]

    } else {
        day = day[1]
    }

    if (currentHour === 0 && currentMinute === 0) {
        output = "midnight"
        return console.log(output)
    }

    if (currentHour === 12 && currentMinute === 0) {
        output = "noon"
        return console.log(output)
    }

    if (currentMinute === 0 && currentHour > 12) {
        output = hours[currentHour - 13] + " " + "o'clock" + " " + day
        return console.log(output)

    }
    if (currentMinute === 0 && currentHour < 12) {
        output = hours[currentHour - 1] + " " + "o'clock" + " " + day
        return console.log(output)
    }


    if (currentHour === 0 && currentMinute > 10 && currentMinute < 20) {
        currentHour = "twelve"
        currentMinute = minutes[mm]
        output = currentHour + " " + currentMinute + " " + day
        return console.log(output)
    }

    if (mm === 0) {
        currentMinute = newMM[m - 1]
        output = hours[currentHour - 1] + " " + currentMinute + " " + day
        return console.log(output)

    }


    if(mm > 0 && m > 0){
        currentMinute = newMM[m - 1] + " " + hours[mm - 1]
        output = hours[currentHour] + " " + currentMinute + " " + day
        return console.log(output)
    }


    if (currentMinute < 10) {
        currentMinute = "oh " + hours[currentMinute - 1]
        currentHour = hours[currentHour - 1]
        output = currentHour + " " + currentMinute + " " + day
        return console.log(output)
    }


    console.log(output)
    return output
}

timeWord('00-00')
timeWord('00-12')
timeWord('01-00')
timeWord('06-01')
timeWord('06-10')
timeWord('12-00')
timeWord('12-09')
timeWord('14-00')
timeWord('23-23')

module.exports = timeWord;