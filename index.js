let weekDay = prompt(" Enter the day of the week!")

switch (weekDay) {
    case "monday":
        alert("It's beginning of the week");
        break;
    case "friday":
        alert("Yea, the weekend is cooming soon");
        break;
    case "saturday":
    case "sunday":
        alert("It's weekend, finally")
        break
    default:
        alert("It's a normal day ")
}

//my first exercise with the switch construction