// JavaScript Document
const responses ={
	"hello":"Chào bạn",	
"hi":" Chào bạn",
"Xin chào":"chào bạn",
"các bạn chọn món ăn nào?": "- Phù hợp với đam mê, sở thích.</br>- Phù hợp với khả năng, năng lực bản thân.</br>- Phù hợp với khả năng của bạn.</br>- Gắn với định hướng ngành học và nghề nghiệp sau này.",
"thế nào là món ăn sở trường của bạn": "- Phù hợp với đam mê, sở thích.</br>- Phù hợp với khả năng, năng lực bản thân.</br>- Phù hợp với khả năng của mỗi người.</br>- Gắn với định hướng ngành học và nghề nghiệp sau này.",
"thế nào là món ăn yêu thích của bạn?": "- Phù hợp với đam mê, sở thích.</br>- Phù hợp với khả năng, năng lực bản thân.</br>- Phù hợp với món ăn mà bạn chọn.</br>- Gắn với định hướng ngành học và nghề nghiệp sau này.",
"thế nào là món ăn mà bạn nấu được": "- Phù hợp với đam mê, sở thích.</br>- Phù hợp với khả năng, năng lực bản thân.</br>- Tùy theo sở trường và tay nghề của mỗi người.</br>- Gắn với định hướng ngành học và nghề nghiệp sau này.",
"tại sao nên chọn món ăn đó?": "- Học đúng sở thích sẽ cảm thấy thích thú, tạo động lực cố gắng hết mình và vượt qua mọi khó khăn.</br>- Đam mê sẽ nuôi dưỡng động lực bền vững nhất.</br>- Đúng đam mê, sở thích sẽ phát huy tối đa năng lực của bản thân, dễ đạt kết quả cao và thành công.</br>- Hạn chế bỏ ngang hoặc chuyển đổi môn khác giữa chừng; tránh lãng phí thời gian, chi phí học tập…",
"tại sao nên chọn món ăn theo khả năng của bạn": "- Học đúng sở thích sẽ cảm thấy thích thú, tạo động lực cố gắng hết mình và vượt qua mọi khó khăn.</br>- Đam mê sẽ nuôi dưỡng động lực bền vững nhất.</br>- Đúng đam mê, sở thích sẽ phát huy tối đa năng lực của bản thân, dễ đạt kết quả cao và thành công.</br>- Hạn chế bỏ ngang hoặc chuyển đổi môn khác giữa chừng; tránh lãng phí thời gian, chi phí học tập…",
"tại sao phải  thi theo khả năng và nguyện vọng?": "- Học đúng sở thích sẽ cảm thấy thích thú, tạo động lực cố gắng hết mình và vượt qua mọi khó khăn.</br>- Đam mê sẽ nuôi dưỡng động lực bền vững nhất.</br>- Đúng đam mê, sở thích sẽ phát huy tối đa năng lực của bản thân, dễ đạt kết quả cao và thành công.</br>- Hạn chế bỏ ngang hoặc chuyển đổi môn khác giữa chừng; tránh lãng phí thời gian, chi phí học tập…",
"tại sao phải thi món ăn theo bạn chọn": "- Học đúng sở thích sẽ cảm thấy thích thú, tạo động lực cố gắng hết mình và vượt qua mọi khó khăn.</br>- Đam mê sẽ nuôi dưỡng động lực bền vững nhất.</br>- Đúng đam mê, sở thích sẽ phát huy tối đa năng lực của bản thân, dễ đạt kết quả cao và thành công.</br>- Hạn chế bỏ ngang hoặc chuyển đổi môn khác giữa chừng; tránh lãng phí thời gian, chi phí học tập…",

"những sai lầm thường gặp khi chọn món ăn mà các học sinh cần tránh là gì?": "- Chưa hiểu rõ về các môn thi (đặc điểm môn học, nội dung chương trình, phương pháp học…)</br>- Chọn môn thi không phù hợp với bản thân (năng lực, sở thích…)</br>- Chọn môn thi theo xu hướng phong trào (theo bạn bè, thông tin trên mạng…)</br>- Chọn theo nguyện vọng của người khác (bố mẹ, người thân…)",

"những sai lầm thường gặp khi chọn món ăn mà các học sinh phải né là gì": "- Chưa hiểu rõ về các môn thi (đặc điểm môn học, nội dung chương trình, phương pháp học…)</br>- Chọn môn thi không phù hợp với bản thân (năng lực, sở thích…)</br>- Chọn môn thi theo xu hướng phong trào (theo bạn bè, thông tin trên mạng…)</br>- Chọn theo nguyện vọng của người khác (bố mẹ, người thân…)",
"những sai lầm thường gặp khi chọn món ăn tốt nghiệp?": "- Chưa hiểu rõ về các môn thi (đặc điểm môn học, nội dung chương trình, phương pháp học…)</br>- Chọn môn thi không phù hợp với bản thân (năng lực, sở thích…)</br>- Chọn môn thi theo xu hướng phong trào (theo bạn bè, thông tin trên mạng…)</br>- Chọn theo nguyện vọng của người khác (bố mẹ, người thân…)",
"những sai lầm thường gặp khi chọn món ăn tốt nghiệp": "- Chưa hiểu rõ về các môn thi (đặc điểm môn học, nội dung chương trình, phương pháp học…)</br>- Chọn môn thi không phù hợp với bản thân (năng lực, sở thích…)</br>- Chọn môn thi theo xu hướng phong trào (theo bạn bè, thông tin trên mạng…)</br>- Chọn theo nguyện vọng của người khác (bố mẹ, người thân…)",
"nếu chọn món ăn theo phong trào hoặc nguyện vọng của người khác sẽ như thế nào?":"- Dễ bị áp lực (áp lực làm điều mình không thích, áp lực làm vừa lòng người khác…)</br>- Khó đạt được thành công nếu không đam mê.</br>- Hạn chế sự nỗ lực, cố gắng hết sức</br>- Giảm khả năng tự học, tự tìm tòi kiến thức do không phù hợp với sở thích.",
"nếu chọn món ăn theo phong trào hoặc nguyện vọng của người khác sẽ như thế nào":"- Dễ bị áp lực (áp lực làm điều mình không thích, áp lực làm vừa lòng người khác…)</br>- Khó đạt được thành công nếu không đam mê.</br>- Hạn chế sự nỗ lực, cố gắng hết sức</br>- Giảm khả năng tự học, tự tìm tòi kiến thức do không phù hợp với sở thích.",
"nếu chọn món ăn theo phong trào sẽ như thế nào?":"- Dễ bị áp lực (áp lực làm điều mình không thích, áp lực làm vừa lòng người khác…)</br>- Khó đạt được thành công nếu không đam mê.</br>- Hạn chế sự nỗ lực, cố gắng hết sức</br>- Giảm khả năng tự học, tự tìm tòi kiến thức do không phù hợp với sở thích.",
"nếu chọn món ăn theo phong trào sẽ như thế nào":"- Dễ bị áp lực (áp lực làm điều mình không thích, áp lực làm vừa lòng người khác…)</br>- Khó đạt được thành công nếu không đam mê.</br>- Hạn chế sự nỗ lực, cố gắng hết sức</br>- Giảm khả năng tự học, tự tìm tòi kiến thức do không phù hợp với sở thích.",

    "để chọn được món ngon phù hợp, chúng ta cần phải làm gì?":"- Nghiêm túc khám phá, đánh giá bản thân; biết được những ưu điểm và nhược điểm.Từ đó, xác định được khả năng, sở thích,mục tiêu cho tương lai.</br>- Tìm hiểu về các ngành nghề,gắn với các tổ hợp môn thi xét tuyển Đại học,nhu cầu việc làm và dự báo nguồn nhân lực trong tương lai.</br>- Tìm kiếm sự hướng dẫn từ giáo viên,các chuyên gia,những người có kinh nghiệm…</br>- Thường xuyên học hỏi không ngừng.",
	"để chọn được món ăn phù hợp, chúng ta nên làm gì":"- Nghiêm túc khám phá, đánh giá bản thân; biết được những ưu điểm và nhược điểm.Từ đó, xác định được khả năng, sở thích,mục tiêu cho tương lai.</br>- Tìm hiểu về các ngành nghề,gắn với các tổ hợp môn thi xét tuyển Đại học,nhu cầu việc làm và dự báo nguồn nhân lực trong tương lai.</br>- Tìm kiếm sự hướng dẫn từ giáo viên,các chuyên gia,những người có kinh nghiệm…</br>- Thường xuyên học hỏi không ngừng.",


"để chọn món ăn phù hợp, chúng ta phải làm gì?":"- Nghiêm túc khám phá, đánh giá bản thân; biết được những ưu điểm và nhược điểm.Từ đó, xác định được khả năng, sở thích,mục tiêu cho tương lai.</br>- Tìm hiểu về các ngành nghề,gắn với các tổ hợp môn thi xét tuyển Đại học,nhu cầu việc làm và dự báo nguồn nhân lực trong tương lai.</br>- Tìm kiếm sự hướng dẫn từ giáo viên,các chuyên gia,những người có kinh nghiệm…</br>- Thường xuyên học hỏi không ngừng.",
"để chọn môn thi và ngành học phù hợp, học sinh cần làm gì":"- Nghiêm túc khám phá, đánh giá bản thân; biết được những ưu điểm và nhược điểm.Từ đó, xác định được khả năng, sở thích,mục tiêu cho tương lai.</br>- Tìm hiểu về các ngành nghề,gắn với các tổ hợp môn thi xét tuyển Đại học,nhu cầu việc làm và dự báo nguồn nhân lực trong tương lai.</br>- Tìm kiếm sự hướng dẫn từ giáo viên,các chuyên gia,những người có kinh nghiệm…</br>- Thường xuyên học hỏi không ngừng.",

"chọn món ngon và định hướng cái món đó dựa trên các tiêu chí nào?":"- Đam mê</br>- Phù hợp với năng lực</br>- Gắn với xu hướng của thực tiễn xã hội.</br>- Phù hợp điều kiện sức khỏe.</br>- Phù hợp hoàn cảnh kinh tế gia đình.",
"chọn món ngon và định hướng cái món đó dựa trên các tiêu chí nào":"- Đam mê</br>- Phù hợp với năng lực</br>- Gắn với xu hướng của thực tiễn xã hội.</br>- Phù hợp điều kiện sức khỏe.</br>- Phù hợp hoàn cảnh kinh tế gia đình.",
"Dựa trên tiêu chí nào để lựa chọn món đó":"- Đam mê</br>- Phù hợp với năng lực</br>- Gắn với xu hướng của thực tiễn xã hội.</br>- Phù hợp điều kiện sức khỏe.</br>- Phù hợp hoàn cảnh kinh tế gia đình.",
"Dựa trên tiêu chí nào để lựa chọn món đó?":"- Đam mê</br>- Phù hợp với năng lực</br>- Gắn với xu hướng của thực tiễn xã hội.</br>- Phù hợp điều kiện sức khỏe.</br>- Phù hợp hoàn cảnh kinh tế gia đình.",
};
document.getElementById('chatbot-toggle-btn').addEventListener('click', toggleChatbot);
document.getElementById('close-btn').addEventListener('click', toggleChatbot);
document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function toggleChatbot() {
    const chatbotPopup = document.getElementById('chatbot-popup');
    chatbotPopup.style.display = chatbotPopup.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    if (userInput !== '') {
        appendMessage('user', userInput);
        respondToUser(userInput.toLowerCase());
        document.getElementById('user-input').value = '';
    }
}

function respondToUser(userInput) {
    const response = responses[userInput] || responses["default"];
    setTimeout(function() {
        appendMessage('bot', response);
    }, 500);
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
    if (sender === 'bot' && message === responses["default"]) {
        const buttonYes = document.createElement('button');
        buttonYes.textContent = '✔ Yes';
        buttonYes.onclick = function() {
            appendMessage('bot', responses["expert"]);
        };
        const buttonNo = document.createElement('button');
        buttonNo.textContent = '✖ No';
        buttonNo.onclick = function() {
            appendMessage('bot', responses["no"]);
        };
const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.appendChild(buttonYes);
        buttonContainer.appendChild(buttonNo);
        chatBox.appendChild(buttonContainer);
    }
}