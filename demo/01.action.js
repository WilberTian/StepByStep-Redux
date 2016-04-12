const ADD_TASK = 'ADD_TASK';
const SELECT_CATEGORY = 'SELECT_CATEGORY';

function addTask(name, category) {
    return {
        type: ADD_TASK,
        name,
        category
    };
}

function selectCategory(category) {
    return {
        type: SELECT_CATEGORY,
        category
    };
}

console.log(addTask('Write a blog', 'Writing'));
console.log(selectCategory('Reading'));