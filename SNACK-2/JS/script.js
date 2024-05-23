const studenti = [
    {
        Id: '213',
        Name: 'Giuseppina della Rovere',
        Grades: '78'
    },
    {
        Id: '110',
        Name: 'Paola Cortellessa ',
        Grades: '96'
    },
    {
        Id: '250',
        Name: 'Andrea Mantegna',
        Grades: '48'
    },
    {
        Id: '145',
        Name: 'Gaia Borromini',
        Grades: '74'
    },
    {
        Id: '196',
        Name: 'Luigi Grimaldello',
        Grades: '68'
    },
    {
        Id: '102',
        Name: 'Piero della Francesca',
        Grades: '50'
    },
    {
        Id: '120',
        Name: 'Francesca da Polenta',
        Grades: '84'
    }
];

const upperCaseNames = studenti.map(student => ({
    Id: student.Id,
    Name: student.Name.toUpperCase(),
    Grades: student.Grades
}));
console.log(upperCaseNames);