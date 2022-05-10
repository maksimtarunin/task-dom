/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    for (let i = 0; i < count; i++)
        document.body.insertAdjacentHTML(
            'afterbegin',
            `<${tag}>${content}</${tag}>`,
        );
    return;
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    let div = document.createElement('div');
    div.setAttribute('class', 'item_1');
    let nodeArr = [div];
    for (let i = 2; i <= level; i++) {
        let newNodeArr = new Array();
        for (let node of nodeArr) {
            for (let j = 0; j < childrenCount; j++) {
                let newNode = document.createElement('div');
                newNode.setAttribute('class', `item_${i}`);
                node.append(newNode);
                newNodeArr.push(newNode);
            }
        }
        nodeArr = newNodeArr;
    }

    return div;
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    const div = generateTree(2, 3);

    let nodeArr = div.getElementsByClassName('item_2');

    for (let element of nodeArr) {
        let newNode = document.createElement('section');
        newNode.setAttribute('class', 'item_2');
        newNode.innerHTML = element.innerHTML;
        element.replaceWith(newNode);
    }
    return div;
}
