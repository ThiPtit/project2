'use strict';

// Khai báo hàm MakeMultiFilter
function makeMultiFilter(originalArray) {
    // Khởi tạo mảng hiện tại
    let currentArray = [...originalArray];
    
    // Hàm trả về được gán cho biến arrayFilterer
    return function arrayFilterer(filterCriteria, callback) {
        // Kiểm tra filterCriteria có phải là hàm không
        if (typeof filterCriteria === 'function') {
            // Lặp qua mảng hiện tại và áp dụng filterCriteria
            currentArray = currentArray.filter(filterCriteria);
        } else {
            // Nếu filterCriteria không phải là hàm, trả về mảng hiện tại mà không thay đổi
            return currentArray;
        }
        
        // Kiểm tra callback có phải là hàm không
        if (typeof callback === 'function') {
            // Gọi callback với giá trị của mảng hiện tại
            callback.call(originalArray, currentArray);
        }
        
        // Trả về chính hàm arrayFilterer để có thể tiếp tục sử dụng
        return arrayFilterer;
    };
}
