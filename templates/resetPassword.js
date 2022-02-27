"use strict";
exports.getTemplate = (userEmail, token, name, domain) => {
  const message = {
    from : process.env.EMAIL_SENDER,
    to : userEmail,
    subject : "Password Reset",
    text : `
    Hi ${name}, Did you Forget your password? Here is the reset link https://${
        domain}/forget/reset?token=${token}`,
    html : `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
	<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
	
	<head>
		<!--[if gte mso 9]><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml><![endif]-->
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
		<meta name="viewport" content="width=device-width">
		<!--[if !mso]><!-->
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<!--<![endif]-->
		<title></title>
		<!--[if !mso]><!-->
		<!--<![endif]-->
		<style type="text/css">
			body {
				margin: 0;
				padding: 0;
			}
	
			table,
			td,
			tr {
				vertical-align: top;
				border-collapse: collapse;
			}
	
			* {
				line-height: inherit;
			}
	
			a[x-apple-data-detectors=true] {
				color: inherit !important;
				text-decoration: none !important;
			}
		</style>
		<style type="text/css" id="media-query">
			@media (max-width: 620px) {
	
				.block-grid,
				.col {
					min-width: 320px !important;
					max-width: 100% !important;
					display: block !important;
				}
	
				.block-grid {
					width: 100% !important;
				}
	
				.col {
					width: 100% !important;
				}
	
				.col_cont {
					margin: 0 auto;
				}
	
				img.fullwidth,
				img.fullwidthOnMobile {
					width: 100% !important;
				}
	
				.no-stack .col {
					min-width: 0 !important;
					display: table-cell !important;
				}
	
				.no-stack.two-up .col {
					width: 50% !important;
				}
	
				.no-stack .col.num2 {
					width: 16.6% !important;
				}
	
				.no-stack .col.num3 {
					width: 25% !important;
				}
	
				.no-stack .col.num4 {
					width: 33% !important;
				}
	
				.no-stack .col.num5 {
					width: 41.6% !important;
				}
	
				.no-stack .col.num6 {
					width: 50% !important;
				}
	
				.no-stack .col.num7 {
					width: 58.3% !important;
				}
	
				.no-stack .col.num8 {
					width: 66.6% !important;
				}
	
				.no-stack .col.num9 {
					width: 75% !important;
				}
	
				.no-stack .col.num10 {
					width: 83.3% !important;
				}
	
				.video-block {
					max-width: none !important;
				}
	
				.mobile_hide {
					min-height: 0px;
					max-height: 0px;
					max-width: 0px;
					display: none;
					overflow: hidden;
					font-size: 0px;
				}
	
				.desktop_hide {
					display: block !important;
					max-height: none !important;
				}
	
				.img-container.big img {
					width: auto !important;
				}
			}
		</style>
	</head>
	
	<body class="clean-body" style="margin: 0; padding: 0; -webkit-text-size-adjust: 100%; background-color: #091548;">
		<!--[if IE]><div class="ie-browser"><![endif]-->
		<table class="nl-container" style="table-layout: fixed; vertical-align: top; min-width: 320px; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #091548; width: 100%;" cellpadding="0" cellspacing="0" role="presentation" width="100%" bgcolor="#091548" valign="top">
			<tbody>
				<tr style="vertical-align: top;" valign="top">
					<td style="word-break: break-word; vertical-align: top;" valign="top">
						<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#091548"><![endif]-->
						<div style="background-image:url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/3986/background_2.png');background-position:center top;background-repeat:repeat;background-color:#091548;">
							<div class="block-grid " style="min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
								<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
									<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-image:url('https://d1oco4z2z1fhwp.cloudfront.net/templates/default/3986/background_2.png');background-position:center top;background-repeat:repeat;background-color:#091548;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
									<!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:transparent;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top:5px; padding-bottom:15px;"><![endif]-->
									<div class="col num12" style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; width: 600px;">
										<div class="col_cont" style="width:100% !important;">
											<!--[if (!mso)&(!IE)]><!-->
											<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:5px; padding-bottom:15px; padding-right: 10px; padding-left: 10px;">
												<!--<![endif]-->
												<table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
													<tbody>
														<tr style="vertical-align: top;" valign="top">
															<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
																<table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 8px; width: 100%;" align="center" role="presentation" height="8" valign="top">
																	<tbody>
																		<tr style="vertical-align: top;" valign="top">
																			<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="8" valign="top"><span></span></td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
												<div class="img-container center fixedwidth" align="center" style="padding-right: 0px;padding-left: 0px;">
													<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 0px;padding-left: 0px;" align="center"><![endif]--><img class="center fixedwidth" align="center" border="0" src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/3986/header3.png" alt="Main Image" title="Main Image" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 232px; max-width: 100%; display: block;" width="232">
													<!--[if mso]></td></tr></table><![endif]-->
												</div>
												<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 0px; padding-left: 0px; padding-top: 10px; padding-bottom: 15px; font-family: sans-serif"><![endif]-->
												<div style="color:#ffffff;font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;line-height:1.2;padding-top:10px;padding-right:0px;padding-bottom:15px;padding-left:0px;">
													<div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.2; color: #ffffff; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif; mso-line-height-alt: 17px;">
														<p style="margin: 0; font-size: 30px; line-height: 1.2; word-break: break-word; text-align: center; mso-line-height-alt: 36px; margin-top: 0; margin-bottom: 0;"><span style="font-size: 30px;">Reset Your Password</span></p>
													</div>
												</div>
												<!--[if mso]></td></tr></table><![endif]-->
												<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 5px; padding-left: 5px; padding-top: 5px; padding-bottom: 5px; font-family: sans-serif"><![endif]-->
												<div style="color:#ffffff;font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;line-height:1.5;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px;">
													<div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.5; color: #ffffff; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif; mso-line-height-alt: 21px;">
														<p style="margin: 0; font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 21px; margin-top: 0; margin-bottom: 0;">We received a request to reset your password. Don’t worry,</p>
														<p style="margin: 0; font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 21px; margin-top: 0; margin-bottom: 0;">we are here to help you.</p>
														<p style="margin: 0; font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 21px; margin-top: 0; margin-bottom: 0;">&nbsp;</p>
														<p style="margin: 0; font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 21px; margin-top: 0; margin-bottom: 0;">&nbsp;</p>
														<p style="margin: 0; font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 21px; margin-top: 0; margin-bottom: 0;">We cannot simply send you your old password.</p>
														<p style="margin: 0; font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 21px; margin-top: 0; margin-bottom: 0;">A unique link to reset your password has been generated for you.</p>
														<p style="margin: 0; font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 21px; margin-top: 0; margin-bottom: 0;">To reset your password, click the following link and follow the instructions.</p>
													</div>
												</div>
												<!--[if mso]></td></tr></table><![endif]-->
												<div class="button-container" align="center" style="padding-top:20px;padding-right:15px;padding-bottom:20px;padding-left:15px;">
													<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;"><tr><td style="padding-top: 20px; padding-right: 15px; padding-bottom: 20px; padding-left: 15px" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://${
        domain}/forget/reset?token=${
        token}" style="height:31.5pt;width:147.75pt;v-text-anchor:middle;" arcsize="58%" stroke="false" fillcolor="#ffffff"><w:anchorlock/><v:textbox inset="0,0,0,0"><center style="color:#091548; font-family:sans-serif; font-size:15px"><![endif]--><a href="https://${
        domain}/forget/reset?token=${
        token}" target="_blank" style="-webkit-text-size-adjust: none; text-decoration: none; display: inline-block; color: #091548; background-color: #ffffff; border-radius: 24px; -webkit-border-radius: 24px; -moz-border-radius: 24px; width: auto; width: auto; border-top: 1px solid #ffffff; border-right: 1px solid #ffffff; border-bottom: 1px solid #ffffff; border-left: 1px solid #ffffff; padding-top: 5px; padding-bottom: 5px; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif; text-align: center; mso-border-alt: none; word-break: keep-all;"><span style="padding-left:25px;padding-right:25px;font-size:15px;display:inline-block;letter-spacing:undefined;"><span style="font-size: 16px; line-height: 2; word-break: break-word; mso-line-height-alt: 32px;"><span style="font-size: 15px; line-height: 30px;" data-mce-style="font-size: 15px; line-height: 30px;"><strong>RESET MY PASSWORD</strong></span></span></span></a>
													<!--[if mso]></center></v:textbox></v:roundrect></td></tr></table><![endif]-->
												</div>
												<table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
													<tbody>
														<tr style="vertical-align: top;" valign="top">
															<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 10px; padding-right: 10px; padding-bottom: 15px; padding-left: 10px;" valign="top">
																<table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="60%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #5A6BA8; width: 60%;" align="center" role="presentation" valign="top">
																	<tbody>
																		<tr style="vertical-align: top;" valign="top">
																			<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
												<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 25px; padding-left: 25px; padding-top: 10px; padding-bottom: 10px; font-family: sans-serif"><![endif]-->
												<div style="color:#7f96ef;font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;line-height:1.5;padding-top:10px;padding-right:25px;padding-bottom:10px;padding-left:25px;">
													<div class="txtTinyMce-wrapper" style="font-size: 14px; line-height: 1.5; color: #7f96ef; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif; mso-line-height-alt: 21px;">
														<p style="margin: 0; font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 21px; margin-top: 0; margin-bottom: 0;"><strong>Didn’t request a password reset?</strong></p>
														<p style="margin: 0; font-size: 14px; line-height: 1.5; word-break: break-word; text-align: center; mso-line-height-alt: 21px; margin-top: 0; margin-bottom: 0;">You can safely ignore this message.</p>
													</div>
												</div>
												<!--[if mso]></td></tr></table><![endif]-->
												<table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
													<tbody>
														<tr style="vertical-align: top;" valign="top">
															<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px;" valign="top">
																<table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="60%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 0px solid transparent; height: 30px; width: 60%;" align="center" role="presentation" height="30" valign="top">
																	<tbody>
																		<tr style="vertical-align: top;" valign="top">
																			<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" height="30" valign="top"><span></span></td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
												<!--[if (!mso)&(!IE)]><!-->
											</div>
											<!--<![endif]-->
										</div>
									</div>
									<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
									<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
								</div>
							</div>
						</div>
						<div style="background-color:transparent;">
							<div class="block-grid " style="min-width: 320px; max-width: 600px; overflow-wrap: break-word; word-wrap: break-word; word-break: break-word; Margin: 0 auto; background-color: transparent;">
								<div style="border-collapse: collapse;display: table;width: 100%;background-color:transparent;">
									<!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:transparent;"><tr><td align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr class="layout-full-width" style="background-color:transparent"><![endif]-->
									<!--[if (mso)|(IE)]><td align="center" width="600" style="background-color:transparent;width:600px; border-top: 0px solid transparent; border-left: 0px solid transparent; border-bottom: 0px solid transparent; border-right: 0px solid transparent;" valign="top"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 10px; padding-left: 10px; padding-top:15px; padding-bottom:15px;"><![endif]-->
									<div class="col num12" style="min-width: 320px; max-width: 600px; display: table-cell; vertical-align: top; width: 600px;">
										<div class="col_cont" style="width:100% !important;">
											<!--[if (!mso)&(!IE)]><!-->
											<div style="border-top:0px solid transparent; border-left:0px solid transparent; border-bottom:0px solid transparent; border-right:0px solid transparent; padding-top:15px; padding-bottom:15px; padding-right: 10px; padding-left: 10px;">
												<!--<![endif]-->
												<div class="img-container center fixedwidth" align="center" style="padding-right: 5px;padding-left: 5px;">
													<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr style="line-height:0px"><td style="padding-right: 5px;padding-left: 5px;" align="center"><![endif]-->
													<div style="font-size:1px;line-height:5px">&nbsp;</div><img class="center fixedwidth" align="center" border="0" src="https://i.ibb.co/NNfQJ3j/logo.png" alt="Logo" title="Logo" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; width: 116px; max-width: 100%; display: block;" width="116">
													<div style="font-size:1px;line-height:5px">&nbsp;</div>
													<!--[if mso]></td></tr></table><![endif]-->
												</div>
												<table class="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" role="presentation" valign="top">
													<tbody>
														<tr style="vertical-align: top;" valign="top">
															<td class="divider_inner" style="word-break: break-word; vertical-align: top; min-width: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; padding-top: 15px; padding-right: 10px; padding-bottom: 15px; padding-left: 10px;" valign="top">
																<table class="divider_content" border="0" cellpadding="0" cellspacing="0" width="60%" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-top: 1px solid #5A6BA8; width: 60%;" align="center" role="presentation" valign="top">
																	<tbody>
																		<tr style="vertical-align: top;" valign="top">
																			<td style="word-break: break-word; vertical-align: top; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;" valign="top"><span></span></td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
												<table class="social_icons" cellpadding="0" cellspacing="0" width="100%" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" valign="top">
													<tbody>
														<tr style="vertical-align: top;" valign="top">
															<td style="word-break: break-word; vertical-align: top; padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;" valign="top">
																<table class="social_table" align="center" cellpadding="0" cellspacing="0" role="presentation" style="table-layout: fixed; vertical-align: top; border-spacing: 0; border-collapse: collapse; mso-table-tspace: 0; mso-table-rspace: 0; mso-table-bspace: 0; mso-table-lspace: 0;" valign="top">
																	<tbody>
																		<tr style="vertical-align: top; display: inline-block; text-align: center;" align="center" valign="top">
																			<td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 10px; padding-left: 10px;" valign="top"><a href="https://www.linkedin.com/company/code-chef-cu-coders" target="_blank"><img width="33" height="32" src="https://i.ibb.co/3RYJrhQ/linkedin.png" alt="LinkedIn" title="LinkedIn" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"></a></td>
																			<td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 10px; padding-left: 10px;" valign="top"><a href="https://instagram.com/cu.coders" target="_blank"><img width="35" height="32" src="https://i.ibb.co/Y0kqTPs/insta.png" alt="Instagram" title="Instagram" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"></a></td>
																			<td style="word-break: break-word; vertical-align: top; padding-bottom: 0; padding-right: 10px; padding-left: 10px;" valign="top"><a href="mailto:cuchapter@gmail.com" target="_blank"><img width="33" height="32" src="https://i.ibb.co/cQrk96F/mail.png" alt="mail" title="mail" style="text-decoration: none; -ms-interpolation-mode: bicubic; height: auto; border: 0; display: block;"></a></td>
																		</tr>
																	</tbody>
																</table>
															</td>
														</tr>
													</tbody>
												</table>
												<!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right: 15px; padding-left: 15px; padding-top: 15px; padding-bottom: 15px; font-family: sans-serif"><![endif]-->
												<div style="color:#4a60bb;font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif;line-height:1.2;padding-top:15px;padding-right:15px;padding-bottom:15px;padding-left:15px;">
													<div class="txtTinyMce-wrapper" style="line-height: 1.2; font-size: 12px; font-family: Varela Round, Trebuchet MS, Helvetica, sans-serif; color: #4a60bb; mso-line-height-alt: 14px;">
														<p style="margin: 0; font-size: 12px; line-height: 1.2; text-align: center; word-break: break-word; mso-line-height-alt: 14px; margin-top: 0; margin-bottom: 0;"><span style>Copyright © 2021 CU-Chapter, All rights reserved.</span></p>
													</div>
												</div>
												<!--[if mso]></td></tr></table><![endif]-->
												<div style="font-size:16px;text-align:center;font-family:Varela Round, Trebuchet MS, Helvetica, sans-serif">
													<div style="height-top: 20px;">&nbsp;</div>
												</div>
												<!--[if (!mso)&(!IE)]><!-->
											</div>
											<!--<![endif]-->
										</div>
									</div>
									<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
									<!--[if (mso)|(IE)]></td></tr></table></td></tr></table><![endif]-->
								</div>
							</div>
						</div>
						<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
					</td>
				</tr>
			</tbody>
		</table>
		<!--[if (IE)]></div><![endif]-->
	</body>
	
	</html>`,
  };
  return message;
};
