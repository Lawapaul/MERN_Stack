let btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();

    let input = document.querySelector('input[name="u_name"]');
    let reg = document.querySelector('input[name="reg_no"]');
    let gender = document.querySelector('input[name="gender"]:checked');

    if (!gender) {
        alert("Please select a gender");
        return;
    }

    let table = document.querySelector('.table');

    table.innerHTML += `
        <tr>
            <td>${input.value}</td>
            <td>${reg.value}</td>
            <td>${gender.id}</td>
        </tr>
    `;
});