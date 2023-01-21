const Done = document.getElementById('Add-Btn')
const Table= document.getElementById('display')

let Row = 1
Done.onclick = function () {

    const Name = document.getElementById('name').value
    const Email = document.getElementById('email').value
    const Age = document.getElementById('age').value
    const Address = document.getElementById('Address').value
    const Image = document.createElement('img')

    if (Name != '' && Email != '' && Age != '' && Address != '') {
        let values = []
        let Selected_Value = document.querySelectorAll('input[type="checkbox"]:checked')
        Array.from(Selected_Value).forEach(function (e) {
            values.push(e.value)
        })

        const description =
         `<p><strong>Name:</strong> ${Name}
         <br><strong>Email:</strong> ${Email}
         <br><strong>Age:</strong> ${Age}
         <br><strong>Address: </strong> ${Address}
         <br><strong>Gender:</strong> 
         ${document.querySelector('input[type="radio"]:checked').value}
        <br><strong>Skills:</strong> ${values.join(', ')}</p>
        `
        let NewRow = Table.insertRow(Row)

        let Block_1 = NewRow.insertCell(0)
        let Block_2 = NewRow.insertCell(1)

        if (document.querySelector('input[type="radio"]:checked').value == 'Male') {
            Image.setAttribute('src', 'Image/Boy.jpg')
            Image.setAttribute('alt', 'Male')
        }
         else if(document.querySelector('input[type="radio"]:checked').value =='Female'){
            Image.setAttribute('src', 'Image/Female.webp')
            Image.setAttribute('alt', 'Female')
        }
        else{
             Image.setAttribute('src', 'Image/others.webp')
            Image.setAttribute('alt', 'Others')
        }

        Block_1.innerHTML = description
        Block_2.appendChild(Image)

        Row++
        document.getElementById('input-form').reset()
        Name = Email = Age = ' '
    }
    else {
        alert('Please fill All The Fields Details')
    }
}

document.getElementById('Delete-Btn').onclick = function () {
    if (Row != 1) {
        console.log(Row)
        Row--
        Table.deleteRow(Row)
    }
    else
        return
}
