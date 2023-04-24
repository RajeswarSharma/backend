"use strict";
exports.getTemplate = (userEmail, name) => {
    const message = {
        from: process.env.EMAIL_SENDER,
        to: userEmail,
        subject: "CU-Chapter Project Submission",
        text: `Dear ${name},\n\nThank you for trusting us. We will get back to you soon.\n\nRegards,\nTeam`,        
        html: `<!DOCTYPE html>
        <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
        
        <head>
            <title></title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
            <style>
                * {
                    box-sizing: border-box;
                }
        
                body {
                    margin: 0;
                    padding: 0;
                }
        
                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: inherit !important;
                }
        
                #MessageViewBody a {
                    color: inherit;
                    text-decoration: none;
                }
        
                p {
                    line-height: inherit
                }
        
                @media (max-width:690px) {
        
                    .fullMobileWidth,
                    .row-content {
                        width: 100% !important;
                    }
        
                    .image_block img.big {
                        width: auto !important;
                    }
        
                    .menu-checkbox[type=checkbox]~.menu-links {
                        display: none !important;
                        padding: 5px 0;
                    }
        
                    .menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-open {
                        display: none !important;
                    }
        
                    .menu-checkbox[type=checkbox]:checked~.menu-links,
                    .menu-checkbox[type=checkbox]~.menu-trigger {
                        display: block !important;
                        max-width: none !important;
                        max-height: none !important;
                        font-size: inherit !important;
                    }
        
                    .menu-checkbox[type=checkbox]~.menu-links>a,
                    .menu-checkbox[type=checkbox]~.menu-links>span.label {
                        display: block !important;
                        text-align: center;
                    }
        
                    .menu-checkbox[type=checkbox]:checked~.menu-trigger .menu-close {
                        display: block !important;
                    }
        
                    .column .border,
                    .mobile_hide {
                        display: none;
                    }
        
                    .stack .column {
                        width: 100%;
                        display: block;
                    }
        
                    .mobile_hide {
                        min-height: 0;
                        max-height: 0;
                        max-width: 0;
                        overflow: hidden;
                        font-size: 0px;
                    }
                }
        
                menu1g19bk:checked~.menu-links {
                    background-color: #5855bd !important;
                }
        
                menu1g19bk:checked~.menu-links a,
                menu1g19bk:checked~.menu-links span {
                    color: #ffffff !important;
                }
            </style>
        </head>
        
        <body style="background-color: #f9f9f9; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
            <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f9f9f9;">
                <tbody>
                    <tr>
                        <td>
                            <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table class="row-content" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 670px;" width="670">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                <tr>
                                                                    <td style="padding-left:25px;padding-top:10px;width:100%;padding-right:0px;padding-bottom:5px;">
                                                                        <div style="line-height:10px"><a href="https://cuchapter.tech" target="_blank" style="outline:none" tabindex="-1"><img src="https://i.ibb.co/NNfQJ3j/logo.png" style="display: block; height: auto; border: 0; width: 151px; max-width: 100%;" width="151" alt="Logo" title="Logo"></a></div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <table class="menu_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                <tr>
                                                                    <td style="color:#5855bd;font-family:inherit;font-size:16px;padding-right:20px;text-align:right;padding-top:30px;padding-bottom:30px;">
                                                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                            <tr>
                                                                                <td style="text-align:right;font-size:0px;">
                                                                                    <!--[if !mso><!--><input class="menu-checkbox" id="menu1g19bk" type="checkbox" style="display:none !important;max-height:0;visibility:hidden;">
                                                                                    <!--<![endif]-->
                                                                                    <div class="menu-trigger" style="display:none;max-height:0px;max-width:0px;font-size:0px;overflow:hidden;"><label class="menu-label" for="menu1g19bk" style="height:36px;width:36px;display:inline-block;cursor:pointer;mso-hide:all;user-select:none;align:right;text-align:center;color:#ffffff;text-decoration:none;background-color:#5855bd;"><span class="menu-open" style="mso-hide:all;font-size:26px;line-height:36px;">☰</span><span class="menu-close" style="display:none;mso-hide:all;font-size:26px;line-height:36px;">✕</span></label></div>
                                                                                    <div class="menu-links">
                                                                                        <!--[if mso]>
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="center" style="">
        <tr>
        <td style="padding-top:5px;padding-right:20px;padding-bottom:5px;padding-left:15px">
        <![endif]--><a href="https://main.cuchapter.tech/contact" style="padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:20px;display:inline-block;color:#5855bd;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;text-decoration:none;letter-spacing:normal;">Log In</a>
                                                                                        <!--[if mso]></td><td style="padding-top:5px;padding-right:20px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="https://main.cuchapter.tech/careers" style="padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:20px;display:inline-block;color:#5855bd;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;text-decoration:none;letter-spacing:normal;">Careers</a>
                                                                                        <!--[if mso]></td><td style="padding-top:5px;padding-right:20px;padding-bottom:5px;padding-left:15px"><![endif]--><a href="https://main.cuchapter.tech/contact" style="padding-top:5px;padding-bottom:5px;padding-left:15px;padding-right:20px;display:inline-block;color:#5855bd;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;font-size:16px;text-decoration:none;letter-spacing:normal;">Contact Us</a>
                                                                                        <!--[if mso]></td></tr></table><![endif]-->
                                                                                    </div>
                                                                                </td>
                                                                            </tr>
                                                                        </table>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; background-position: top center; background-color: #ffffff; width: 670px;" width="670">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tr>
                                                                    <td style="padding-bottom:10px;padding-left:25px;padding-right:10px;padding-top:45px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #61697a; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                                <p style="margin: 0; font-size: 14px;">Hi ${name},</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tr>
                                                                    <td style="padding-bottom:10px;padding-left:25px;padding-right:25px;padding-top:10px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #1f0b0b; line-height: 1.2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                                <p style="margin: 0; font-size: 14px;"><strong><span style="font-size:46px;">Thanks for trusting Us!</span></strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tr>
                                                                    <td style="padding-bottom:25px;padding-left:25px;padding-right:25px;padding-top:10px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div style="font-size: 12px; mso-line-height-alt: 18px; color: #393d47; line-height: 1.5; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                                <p style="margin: 0; font-size: 14px;">Thanks for submitting your project ideas to us. We're now evaluating it. After evaluation we will contact you.&nbsp;</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table class="button_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                <tr>
                                                                    <td style="padding-bottom:15px;padding-left:20px;padding-right:10px;padding-top:10px;text-align:left;">
                                                                        <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://main.cuchapter.tech/" style="height:52px;width:190px;v-text-anchor:middle;" arcsize="8%" stroke="false" fillcolor="#5855bd"><w:anchorlock/><v:textbox inset="5px,0px,0px,0px"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px"><![endif]--><a href="https://main.cuchapter.tech/" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#5855bd;border-radius:4px;width:auto;border-top:0px solid #8a3b8f;border-right:0px solid #8a3b8f;border-bottom:0px solid #8a3b8f;border-left:0px solid #8a3b8f;padding-top:10px;padding-bottom:10px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:50px;padding-right:45px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><strong>Know More</strong></span></span></a>
                                                                        <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <div class="spacer_block" style="height:55px;line-height:50px;font-size:1px;">&#8202;</div>
                                                            <div class="spacer_block mobile_hide" style="height:50px;line-height:50px;font-size:1px;">&#8202;</div>
                                                            <div class="spacer_block mobile_hide" style="height:50px;line-height:50px;font-size:1px;">&#8202;</div>
                                                            <table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                <tr>
                                                                    <td style="padding-right:5px;width:100%;padding-left:0px;padding-bottom:55px;">
                                                                        <div align="center" style="line-height:10px"><img src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1826/Image_1.png" style="display: block; height: auto; border: 0; width: 330px; max-width: 100%;" width="330" alt="Alternate text" title="Alternate text"></div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1826/Background.png'); background-position: top center; background-repeat: no-repeat;">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 670px;" width="670">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tr>
                                                                    <td style="padding-bottom:10px;padding-left:35px;padding-right:35px;padding-top:35px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div style="font-size: 12px; mso-line-height-alt: 18px; color: #34495e; line-height: 1.5; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                                <p style="margin: 0; font-size: 14px; text-align: center;"><strong><span style="font-size:24px;">CU-Chapter is a user friendly end to end community with a unique focus on creating rich and beautiful projects.&nbsp;</span></strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                <tr>
                                                                    <td style="width:100%;padding-right:0px;padding-left:0px;padding-top:40px;">
                                                                        <div align="center" style="line-height:10px"><img class="fullMobileWidth big" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1826/middle_Image.png" style="display: block; height: auto; border: 0; width: 469px; max-width: 100%;" width="469" alt="Alternate text" title="Alternate text"></div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tr>
                                                                    <td style="padding-bottom:30px;padding-left:35px;padding-right:35px;padding-top:70px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div style="font-size: 12px; mso-line-height-alt: 18px; color: #34495e; line-height: 1.5; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                                <p style="margin: 0; font-size: 14px; text-align: center;"><strong><span style="font-size:24px;">3 easy steps to make your ideas to reality </span></strong><strong><span style="font-size:24px;">and </span></strong></p>
                                                                                <p style="margin: 0; font-size: 14px; text-align: center;"><strong><span style="font-size:24px;">find your next startup.&nbsp;</span></strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 670px;" width="670">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                <tr>
                                                                    <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:15px;width:100%;">
                                                                        <div align="center" style="line-height:10px"><img class="fullMobileWidth big" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1826/search.png" style="display: block; height: auto; border: 0; width: 315px; max-width: 100%;" width="315" alt="Alternate text" title="Alternate text"></div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <div class="spacer_block" style="height:5px;line-height:5px;font-size:1px;">&#8202;</div>
                                                            <div class="spacer_block mobile_hide" style="height:50px;line-height:50px;font-size:1px;">&#8202;</div>
                                                            <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tr>
                                                                    <td style="padding-bottom:10px;padding-left:25px;padding-right:10px;padding-top:35px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div style="font-size: 12px; mso-line-height-alt: 24px; color: #34495e; line-height: 2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                                <p style="margin: 0; font-size: 14px;"><strong><span style="font-size:24px;">Idea Submission</span></strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tr>
                                                                    <td style="padding-bottom:15px;padding-left:20px;padding-right:10px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div style="font-size: 12px; mso-line-height-alt: 24px; color: #555555; line-height: 2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                                <p style="margin: 0; font-size: 14px;">Submit your ideas on out portal and wait for sometimes. In the meanwhile enjoy your leisure time.&nbsp;</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 670px;" width="670">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <div class="spacer_block" style="height:5px;line-height:5px;font-size:1px;">&#8202;</div>
                                                            <div class="spacer_block mobile_hide" style="height:50px;line-height:50px;font-size:1px;">&#8202;</div>
                                                            <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tr>
                                                                    <td style="padding-bottom:10px;padding-left:25px;padding-right:10px;padding-top:50px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div style="font-size: 12px; mso-line-height-alt: 24px; color: #34495e; line-height: 2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                                <p style="margin: 0; font-size: 14px; text-align: left; mso-line-height-alt: 48px;"><span style="font-size:24px;"><strong>Evaluting Ideas</strong></span></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tr>
                                                                    <td style="padding-bottom:15px;padding-left:25px;padding-right:10px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div style="font-size: 12px; mso-line-height-alt: 24px; color: #555555; line-height: 2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                                <p style="margin: 0; font-size: 14px; text-align: left;">After receiving ideas, we will evaluate the ideas on several parameters.&nbsp;</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                <tr>
                                                                    <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:15px;width:100%;">
                                                                        <div align="center" style="line-height:10px"><img class="fullMobileWidth big" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1826/find_.png" style="display: block; height: auto; border: 0; width: 315px; max-width: 100%;" width="315" alt="Alternate text" title="Alternate text"></div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 670px;" width="670">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                <tr>
                                                                    <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:15px;width:100%;">
                                                                        <div align="center" style="line-height:10px"><img class="fullMobileWidth big" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1826/finding.png" style="display: block; height: auto; border: 0; width: 315px; max-width: 100%;" width="315" alt="Alternate text" title="Alternate text"></div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-2" width="50%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <div class="spacer_block" style="height:5px;line-height:5px;font-size:1px;">&#8202;</div>
                                                            <div class="spacer_block mobile_hide" style="height:50px;line-height:50px;font-size:1px;">&#8202;</div>
                                                            <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tr>
                                                                    <td style="padding-bottom:10px;padding-left:25px;padding-right:10px;padding-top:50px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div style="font-size: 12px; mso-line-height-alt: 24px; color: #34495e; line-height: 2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                                <p style="margin: 0; font-size: 14px;"><strong><span style="font-size:24px;">Select Ideas</span></strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tr>
                                                                    <td style="padding-bottom:15px;padding-left:25px;padding-right:10px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div style="font-size: 12px; mso-line-height-alt: 24px; color: #555555; line-height: 2; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                                <p style="margin: 0; font-size: 14px;">After evaluation we will select ideas and contact you for further process.&nbsp;</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; background-image: url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1826/background_down.png'); background-repeat: no-repeat;">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 670px;" width="670">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tr>
                                                                    <td style="padding-bottom:10px;padding-left:35px;padding-right:10px;padding-top:55px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div style="font-size: 12px; mso-line-height-alt: 18px; color: #34495e; line-height: 1.5; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;">
                                                                                <p style="margin: 0; font-size: 14px; text-align: center;"><strong><span style="font-size:24px;">Get a personalised Demo</span></strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tr>
                                                                    <td style="padding-bottom:20px;padding-left:60px;padding-right:60px;padding-top:10px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 21.6px; color: #555555; line-height: 1.8;">
                                                                                <p style="margin: 0; font-size: 14px; text-align: center;">Discover how CU-Chapter can help you simplify your project</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table class="button_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                <tr>
                                                                    <td style="padding-bottom:10px;padding-left:25px;padding-right:10px;padding-top:10px;text-align:center;">
                                                                        <div align="center">
                                                                            <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://main.cuchapter.tech/calender" style="height:52px;width:248px;v-text-anchor:middle;" arcsize="8%" stroke="false" fillcolor="#5855bd"><w:anchorlock/><v:textbox inset="5px,0px,0px,0px"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:16px"><![endif]--><a href="https://main.cuchapter.tech/calender" target="_blank" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#5855bd;border-radius:4px;width:auto;border-top:0px solid #8a3b8f;border-right:0px solid #8a3b8f;border-bottom:0px solid #8a3b8f;border-left:0px solid #8a3b8f;padding-top:10px;padding-bottom:10px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"><span style="padding-left:50px;padding-right:45px;font-size:16px;display:inline-block;letter-spacing:normal;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><strong>REQUEST A DEMO</strong></span></span></a>
                                                                            <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table class="image_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                <tr>
                                                                    <td style="padding-top:15px;width:100%;padding-right:0px;padding-left:0px;">
                                                                        <div align="center" style="line-height:10px"><img class="fullMobileWidth big" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/1826/find_new_job.png" style="display: block; height: auto; border: 0; width: 436px; max-width: 100%;" width="436" alt="Alternate text" title="Alternate text"></div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="row row-8" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 670px;" width="670">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <div class="spacer_block" style="height:55px;line-height:55px;font-size:1px;">&#8202;</div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="row row-9" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #413ea1;">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 670px;" width="670">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <div class="spacer_block" style="height:55px;line-height:55px;font-size:1px;">&#8202;</div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="row row-10" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #413ea1;">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 670px;" width="670">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tr>
                                                                    <td style="padding-bottom:10px;padding-left:20px;padding-right:10px;padding-top:15px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
                                                                                <p style="margin: 0; font-size: 16px; text-align: left;"><strong>Links</strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tr>
                                                                    <td style="padding-bottom:15px;padding-left:20px;padding-right:10px;padding-top:10px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 21.6px; color: #d0d0d0; line-height: 1.8;">
                                                                                <p style="margin: 0; font-size: 14px; text-align: left;"><a href="https://main.cuchapter.tech/careers" target="_blank" style="text-decoration: none; color: #d0d0d0;" rel="noopener">Careers</a></p>
                                                                                <p style="margin: 0; font-size: 14px; text-align: left;"><a href="https://main.cuchapter.tech/events" target="_blank" style="text-decoration: none; color: #d0d0d0;" rel="noopener">Events</a></p>
                                                                                <p style="margin: 0; font-size: 14px; text-align: left;"><a href="https://main.cuchapter.tech/team" target="_blank" style="text-decoration: none; color: #d0d0d0;" rel="noopener">Team</a></p>
                                                                                <p style="margin: 0; font-size: 14px; text-align: left;"><a href="https://main.cuchapter.tech/contact" target="_blank" style="text-decoration: none; color: #d0d0d0;" rel="noopener">Contact</a></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-2" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tr>
                                                                    <td style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:15px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
                                                                                <p style="margin: 0; font-size: 16px; text-align: left;"><strong>Contact Info</strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tr>
                                                                    <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 21.6px; color: #d0d0d0; line-height: 1.8;">
                                                                                <p style="margin: 0; font-size: 14px; mso-line-height-alt: 25.2px;"><span style="font-size:14px;">IN (+91) 8264962862</span></p>
                                                                                <p style="margin: 0; font-size: 14px; mso-line-height-alt: 21.6px;">&nbsp;</p>
                                                                                <p style="margin: 0; font-size: 14px; mso-line-height-alt: 25.2px;"><span style="font-size:14px;"><a href="mailto:cuchapter@gmail.com" target="_blank" rel="noopener" style="color: #d0d0d0;">cuchapter@gmail.com</a></span></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                        <td class="column column-3" width="33.333333333333336%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <table class="text_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tr>
                                                                    <td style="padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:15px;">
                                                                        <div style="font-family: sans-serif">
                                                                            <div style="font-size: 12px; font-family: Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif; mso-line-height-alt: 14.399999999999999px; color: #ffffff; line-height: 1.2;">
                                                                                <p style="margin: 0; font-size: 16px; text-align: left;"><strong>CU-Chapter</strong></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table class="text_block" width="100%" border="0" cellpadding="10" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;">
                                                                <tr>
                                                                    <td>
                                                                        <div style="font-family: Arial, sans-serif">
                                                                            <div style="font-size: 12px; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; mso-line-height-alt: 21.6px; color: #d0d0d0; line-height: 1.8;">
                                                                                <p style="margin: 0; font-size: 12px; text-align: justify; mso-line-height-alt: 25.2px;"><span style="font-size:14px;">CU Chapter is a platform for young and aspiring developers to get real world experience and get to learn from the best in the industry while creating an impeccable coding environment to install problem solving skills in its members</span></p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                            <table class="social_block" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                <tr>
                                                                    <td style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:10px;text-align:left;">
                                                                        <table class="social-table" width="0px" border="0" cellpadding="0" cellspacing="0" role="presentation" align="left" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                            <tr></tr>
                                                                        </table>
                                                                        <td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 10px; padding-left: 10px;" valign="top"><a href="https://www.linkedin.com/company/cuchapter" target="_blank"><img width="33" height="32" src="https://i.ibb.co/3RYJrhQ/linkedin.png" alt="LinkedIn" title="LinkedIn" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"></a></td>
																		<td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 10px; padding-left: 10px;" valign="top"><a href="https://www.instagram.com/cu.coders/" target="_blank"><img width="35" height="32" src="https://i.ibb.co/Y0kqTPs/insta.png" alt="Instagram" title="Instagram" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"></a></td>
																		<td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 10px; padding-left: 10px;" valign="top"><a href="mailto:contact@cuchapter.tech" target="_blank"><img width="33" height="32" src="https://i.ibb.co/cQrk96F/mail.png" alt="Email" title="Email" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"></a></td>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="row row-11" align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #413ea1;">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table class="row-content stack" align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; color: #000000; width: 670px;" width="670">
                                                <tbody>
                                                    <tr>
                                                        <td class="column column-1" width="100%" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;">
                                                            <div class="spacer_block" style="height:55px;line-height:55px;font-size:1px;">&#8202;</div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table><!-- End -->
        </body>
        
        </html>`,
    };
    return message;
};
