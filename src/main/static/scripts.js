const url = window.location.href
console.log('Hello')

function addBlock() {
    var block = createBlock('paragraph')

    var topic = createLabel()
    var input = createInput();

    var header = document.createElement("div");
    header.classList.add("form-group", "row");

    header.appendChild(topic);
    header.appendChild(input);

    block.appendChild(header);

    var deleteButton = createDeleteButton(block);
    block.appendChild(deleteButton);

    var addButtonRow = document.createElement("div");
    addButtonRow.className = "row mt-4";
    addButtonRow.style.margin = "10px";

    addTextButton = buttonText(block);
    addButtonRow.appendChild(addTextButton);

    var addImageButton = createButton("Вставить картинку")
    addImageButton.onclick = function () {
        var blockImage = createBlock('paragraphImage');

        var label = document.createElement("label");
        label.innerText = "Добавьте картинку:";
        label.style.color = "white";
        blockImage.appendChild(label);

        var fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.style.backgroundColor = "transparent";
        fileInput.style.color = "white";
        fileInput.style.display = "block";

        var deleteButton = createDeleteButton(blockImage);
        blockImage.append(deleteButton);

        fileInput.onchange = function (event) {
            var file = event.target.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    var image = new Image();
                    image.src = event.target.result;

                    image.style.maxWidth = "500px";
                    image.style.maxHeight = "350px";
                    image.style.display = "flex";
                    image.style.justifyContent = "center";
                    image.style.alignItems = "center";
                    blockImage.appendChild(image);
                };
                reader.readAsDataURL(file);
            }
        };

        blockImage.appendChild(fileInput);
        block.appendChild(blockImage);

    };
    addButtonRow.appendChild(addImageButton);

    var addImageTextButton = createButton("Вставить текст с картинки")
    addImageTextButton.onclick = function () {
        var blockTextImage = createBlock('paragraphImageText');

        var label = document.createElement("label");
        label.innerText = "Вытяните текст из картинки:";
        label.style.color = "white";
        blockTextImage.appendChild(label);

        var deleteButton = createDeleteButton(blockTextImage);
        blockTextImage.appendChild(deleteButton);

        var fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.style.backgroundColor = "transparent";
        fileInput.style.color = "white";
        fileInput.style.display = "block"; 

        fileInput.onchange = function (event) {
            var file = event.target.files[0];
            if (file) {
                var reader = new FileReader();
                reader.onload = function (event) {
                    var image = new Image();
                    image.src = event.target.result;


                    image.style.maxWidth = "500px";
                    image.style.maxHeight = "350px";
                    image.style.display = "flex";
                    image.style.justifyContent = "center";
                    image.style.alignItems = "center";

                    blockTextImage.appendChild(image);
                };
                reader.readAsDataURL(file);
            }
        };

        blockTextImage.appendChild(fileInput);
        block.appendChild(blockTextImage);

    };
    addButtonRow.appendChild(addImageTextButton);

    block.appendChild(addButtonRow);
    document.getElementById("container").appendChild(block);
}

function buttonText(block){
    var addTextButton = createButton("Добавить текст");
    addTextButton.onclick = function () {
        var blockText = createBlock('paragraphText');
        var deleteButton = createDeleteButton(blockText);
        blockText.appendChild(deleteButton);
        createText(blockText);
        block.appendChild(blockText);
    };
    return addTextButton
}

function createBlock(className) {
    var block = document.createElement("div");
    block.className = className;
    block.style.position = "relative";
    block.style.margin = "10px";
    block.style.padding = "10px";
    block.style.paddingTop = "22px";
    if (className == 'paragraph') {
        block.style.border = "1px solid white";
    }
    return block
}

function createLabel() {
    var topic = document.createElement("label");
    topic.innerHTML = "Название темы: ";
    topic.classList.add("align-self-center");
    topic.style.marginLeft = "20px";
    return topic
}

function createInput() {
    var input = document.createElement("input");
    input.type = "text";
    input.classList.add("form-control", "col-md-4");
    input.name = "paragraphName"
    return input
}

function createDeleteButton(block) {
    var deleteButton = document.createElement("div");
    deleteButton.className = "delete-button";
    deleteButton.innerHTML = "&times;";
    deleteButton.style.position = "absolute";
    deleteButton.style.top = "0";
    deleteButton.style.right = "0";
    deleteButton.style.width = "30px";
    deleteButton.style.height = "30px";
    deleteButton.style.border = "none";
    deleteButton.style.backgroundColor = "transparent";
    deleteButton.style.color = "#fff";
    deleteButton.style.fontSize = "24px";
    deleteButton.style.fontWeight = "bold";
    deleteButton.style.cursor = "pointer";

    deleteButton.onclick = function () {
        block.parentNode.removeChild(block);
    };

    return deleteButton;
}

function createButton(text) {
    var button = document.createElement("button");
    button.innerText = text;
    button.type = "button";
    button.className = "btn btn-sm btn-primary me-2";
    button.style.backgroundColor = "transparent";
    button.style.border = "none";
    button.style.marginRight = "20px";
    return button;
}

function createText(block) {
    var label = document.createElement("label");
    label.innerText = "Добавьте текст:";
    label.style.color = "white";
    block.appendChild(label);

    var textArea = document.createElement("textarea");
    textArea.className = "form-control border-2 border-primary rounded-3";
    textArea.name = "paragraphText";
    textArea.style.padding = "50px";
    textArea.style.paddingRight = "20px";
    textArea.style = "font-size: 1rem; margin-top: 10px;";
    block.appendChild(textArea);
}

function createImage(block) {
    var image = document.createElement("img")
    block.appendChild(image)
}

function createReport() {
    var studentSurname = document.getElementsByName('studentSurname')[0].value;
    var teacherSurname = document.getElementsByName('teacherSurname')[0].value;
    var studentName = document.getElementsByName('studentName')[0].value;
    var studentPatronymic = document.getElementsByName('studentPatronymic')[0].value;
    var teacherName = document.getElementsByName('teacherName')[0].value;
    var teacherPatronymic = document.getElementsByName('teacherPatronymic')[0].value;
    var numberLab = document.getElementsByName('numberLab')[0].value;
    var nameLab = document.getElementsByName('nameLab')[0].value;
    var yearLab = document.getElementsByName('yearLab')[0].value;

    var nameRegex = /^[a-zA-Zа-яА-Я]+$/;
    var singleLetterRegex = /^[a-zA-Zа-яА-Я]{1}$/;
    var yearRegex = /^\d{4}$/;

    if (!nameRegex.test(studentSurname) || !nameRegex.test(teacherSurname)) {
        alert("Пожалуйста, введите только буквы для фамилии студента и преподавателя.");
    } else if (!singleLetterRegex.test(studentName) || !singleLetterRegex.test(studentPatronymic) || !singleLetterRegex.test(teacherName) || !singleLetterRegex.test(teacherPatronymic)) {
        alert("Пожалуйста, введите только одну букву для имени и отчества студента и преподавателя.");
    } else if (!yearRegex.test(yearLab)) {
        alert("Пожалуйста, введите 4-значное число для года лабораторной работы.");
    } else {
        var container = document.getElementById('container');
        containerBlocks = container.getElementsByClassName('paragraph');
        paragraphsData = []
        for (var i = 0; i < containerBlocks.length; i++) {
            paragraphData = {}
            paragraphName = containerBlocks[i].querySelectorAll('input[name="paragraphName"]')[0];
            paragraphData['id'] = i;
            paragraphData['paragraphName'] = paragraphName.value;
            paragraphData['paragraphContent'] = []

            var elements = containerBlocks[i].querySelectorAll('.paragraphImage, .paragraphText, .paragraphImageText');

            number = 1;
            for (var j = 0; j < elements.length; j++) {
                var className = elements[j].getAttribute('class');
                if (className == 'paragraphText') {
                    paragraphData['paragraphContent'].push({
                        'value': elements[j].querySelectorAll('textarea[name="paragraphText"]')[0].value,
                        'number': 1
                    });
                } else if (className == 'paragraphImage') {
                    paragraphData['paragraphContent'].push({
                        'value': elements[j].querySelectorAll('img')[0].getAttribute('src'),
                        'number': 2
                    });
                } else if (className == 'paragraphImageText') {
                    paragraphData['paragraphContent'].push({
                        'value': elements[j].querySelectorAll('img')[0].getAttribute('src'),
                        'number': 3
                    });
                }
            }

            paragraphsData.push(paragraphData);
        }


        const csrf = document.getElementsByName('csrfmiddlewaretoken')

        $.ajax({
            url: `${url}data_title/`,
            type: 'POST',
            csrf: csrf,
            data: {
                'studentSurname': studentSurname,
                'studentName': studentName,
                'studentPatronymic': studentPatronymic,
                'teacherSurname': teacherSurname,
                'teacherName': teacherName,
                'teacherPatronymic': teacherPatronymic,
                'numberLab': numberLab,
                'nameLab': nameLab,
                'yearLab': yearLab,
                'csrfmiddlewaretoken': csrf[0].value,
                'paragraphsData': JSON.stringify(paragraphsData),
            },
            success: function (response) {
                document.documentElement.innerHTML = response;
            },
            error: function (xhr, status, error) {
                console.log('ошибка: ' + error.message);
            }
        })
    }


}
