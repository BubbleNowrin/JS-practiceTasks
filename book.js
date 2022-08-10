/*তোমার যত বই আছে সেগুলার দাম নিয়ে একটা array লিখে ফেলো। যে বই গুলোর দাম ২০০ টাকার উপরে সেগুলাকে স্কিপ করবে। অর্থাৎ সেগুলাকে আউটপুট হিসেবে দেখাবে না। বাকিদের কে আউটপুট হিসেবে দেখাবে। দেখো করতে পারো কিনা। */

const bookPrice = [30, 50, 600, 150, 80, 250, 520];
let books = [];

for (let i = 0; i < bookPrice.length; i++) {
    let book = bookPrice[i];
    if (book > 200) {
        continue;
    }
    else {
        books.push(book);
    }

}
console.log(books);
