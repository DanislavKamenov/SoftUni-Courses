(async function () {
    const URL = 'https://baas.kinvey.com/appdata/kid_BJXTsSi-e/students';
    const USERNAME = 'guest';
    const PASSWORD = 'guest';
    const BASE_64 = btoa(USERNAME + ':' + PASSWORD);
    const authHeaders = {
        'Content-type': 'application/json',
        'Authorization': 'Basic ' + BASE_64,
    };

    let students = await $.ajax({
        method: "GET",
        headers: authHeaders,
        url: URL,
    });

    loadStudents(students);

    function loadStudents(students) {
        students = students.sort((a, b) => a.ID - b.ID);
        let studentTable = $('#results').find('tbody');
        students.forEach(st => {
            studentTable.append(
                $('<tr>').append(
                    $(`<td>${st.ID}</td>`),
                    $(`<td>${st.FirstName}</td>`),
                    $(`<td>${st.LastName}</td>`),
                    $(`<td>${st.FacultyNumber}</td>`),
                    $(`<td>${st.Grade}</td>`),
                )
            )
        });
    }

    $('#btnCreate').on('click', createStudent);

    function createStudent(e) {
        e.preventDefault();
        let studentData = $('input');
        let student = {};
        $.each(studentData, function (id, data) {
            student[$(data).attr('id')] = $(data).val();
        });

        $.ajax({
            method: 'POST',
            headers: authHeaders,
            url: URL + '/',
            data: JSON.stringify(student)
        });
    }
})();