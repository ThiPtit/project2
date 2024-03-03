// Định nghĩa lớp TemplateProcessor
class TemplateProcessor {
    constructor(template) {
        this.template = template;
    }
}
// Phương thức fillIn của lớp TemplateProcessor
TemplateProcessor.prototype.fillIn = function(dictionary) {
    // Thay thế các thuộc tính trong mẫu với giá trị tương ứng từ từ điển
    return this.template.replace(/{{(.*?)}}/g, (match, property) => {
        // Kiểm tra xem thuộc tính có tồn tại trong từ điển không
        if (dictionary.hasOwnProperty(property)) {
            return dictionary[property]; // Trả về giá trị từ từ điển
        } else {
            return ''; // Nếu không tồn tại, trả về chuỗi rỗng
        }
    });
};

window.TemplateProcessor = TemplateProcessor;