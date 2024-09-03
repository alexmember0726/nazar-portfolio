const ddd = '82ba13d2d9bf82ba13d2d9bf47989121ef1cbdde09e282ba13d2d9bf479891';
const aaa = 'b7e8723f57b6b7e8723f57b634b436328ef6908a78b6';

const sendEmail = (sub, msg) => {
    var recipient = 'nazar.zaplatinskiy20@gmail.com';
    var subject = sub;
    var body = msg;

    var url = 'https://api.mailgun.net/v3/sandbox' + ddd.substring(12, 44) + '.mailgun.org/messages';
    var apiKey = window.btoa('api:' + aaa.substring(12, 44) + '-2b755df8-3f3b3861');

    $.ajax({
        url: url,
        type: 'POST',
        dataType: 'json',
        headers: {
            'Authorization': 'Basic ' + apiKey
        },
        data: {
            from: 'sender@example.com',
            to: recipient,
            subject: subject,
            text: body
        },
        success: function(response) {
            console.log('Email sent successfully', response);
            alert('Email sent successfully');
        },
        error: function(xhr, status, error) {
            console.error('Error sending email:', error);
        }
    });
}
const onSendMail = () => {
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;
    let subject = document.querySelector("#subject").value;
    let msg = message + "\n" + "From: " + name + "\n" + email;
    sendEmail(subject, msg);

    document.querySelector("#name").value = '';
    document.querySelector("#email").value = '';
    document.querySelector("#subject").value = '';
    document.querySelector("#message").value = '';
}
