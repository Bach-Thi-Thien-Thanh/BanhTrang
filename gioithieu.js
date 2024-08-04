let previewThanhVien = document.querySelector('.product-pre');
let previewBox = previewThanhVien.querySelectorAll('.pre');
document.querySelectorAll('.Product_ThanhVien .product').forEach(product => {
    product.onclick = () => {
        previewThanhVien.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(pre => {
            let target = pre.getAttribute('data-target');
            if (name == target) {
                pre.classList.add('active');
            }
        });
    };
});
previewBox.forEach(close =>{
    close.querySelector('.fa-xmark').onclick=()=>{
        close.classList.remove('active');
        previewThanhVien.style.display = 'none';
    }
})