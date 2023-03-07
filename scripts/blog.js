const numbers = document.querySelectorAll('.blogPaginationList a');
const blogItems = document.querySelectorAll('.blogItems');


const showENDBlog = (e) => {
    e.preventDefault();
    if (e.target.getAttribute('data-pagination') == 'end') {

        blogItems.forEach(item => {
            item.classList.add('hiddenblogItems')
        });
        blogItems[length + 1].classList.remove('hiddenblogItems');
    }
}
const ShowFirstBlog = (e) =>{
    e.preventDefault();
    if (e.target.getAttribute('data-pagination') == '0') {

        blogItems.forEach(item => {
            item.classList.add('hiddenblogItems');
        });
        blogItems[0].classList.remove('hiddenblogItems');
    }
}

const handleNumber = () => {
    numbers.forEach(number => {
        number.addEventListener('click', (e)=>{
            showENDBlog(e);
            ShowFirstBlog(e)
        });

    });
}

handleNumber()