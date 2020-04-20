// Convert marks into percentage 
export const convertIntoPercentage = (totalMarks) => {
    const percentage = (totalMarks / 600) * 100
    return percentage
}

//convert percentage into grades
export const convertIntoGrades = (percentage) => {
    let grade
    let color
    switch (true) {
        case (percentage <= 100) && (90 <= percentage):
            grade = "A";
            color="green";
            break;
        case (percentage < 90) && (80 <= percentage):
            grade = "B";
            color="blue";
            break;
        case (percentage < 80) && (70 <= percentage):
            grade = "C";
            color="balck";
            break;
        case (percentage < 70) && (60 <= percentage):
            grade = "D";
            color="#8000ff";
            break;
        case percentage < 60:
            grade = "F";
            color="red";
            break;
        default:
            grade = "F";
            color="red";
            break;
    }

    return {grade:grade,color:color}
}

//SetPercentage
export const setPercaentage = (results) => {
    let marks = []
    for (let key in results) {
        marks.push(parseFloat(results[key]))
    }
    const totalMarks = marks.reduce((accmulator, currentValue) => accmulator + currentValue)
    const percentage = convertIntoPercentage(totalMarks)
    const grade = convertIntoGrades(percentage)
    return grade
}