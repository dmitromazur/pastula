function applyStyle() {
    var selectElement = document.getElementById('select');
    var pro = document.getElementById('misya_pro');
    var lite = document.getElementById('misya_lite');
    var selectedValue = selectElement.value;
    if (selectedValue === 'pro') {
        pro.classList.add('active');
        pro.classList.remove('disable');
        lite.classList.add('disable');
        lite.classList.remove('active');
    } else if (selectedValue === 'lite') {
        pro.classList.add('disable');
        pro.classList.remove('active');
        lite.classList.add('active');
        lite.classList.remove('disable');
    }
}

window.onload = function() {
    var defaultSelectedValue = document.getElementById('select').value;
    if (defaultSelectedValue === 'pro') {
        document.getElementById('misya_pro').classList.add('active');
    } else if (defaultSelectedValue === 'lite') {
        document.getElementById('misya_lite').classList.add('active');
    }
};