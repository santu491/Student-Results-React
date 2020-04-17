export const convertIntoPercentage = (totalMarks) => {
    const percentage = (totalMarks / 600) * 100
    return percentage
}

export const convertIntoGrades = (percentage) => {
    let grade
    switch (true) {
        case (percentage <= 100) && (90 <= percentage):
            grade = "A";
            break;
        case (percentage < 90) && (80 <= percentage):
            grade = "B";
            break;
        case (percentage < 80) && (70 <= percentage):
            grade = "C";
            break;
        case (percentage < 70) && (60 <= percentage):
            grade = "D";
            break;
        case percentage < 60:
            grade = "F";
            break;
        default:
            grade = "F"
            break;
    }

    return grade
}