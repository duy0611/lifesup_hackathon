package fi.lifesup.hackathon.service;

import java.util.Locale;

import javax.inject.Inject;
import javax.mail.internet.MimeMessage;

import org.apache.commons.lang3.CharEncoding;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.MessageSource;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring4.SpringTemplateEngine;

import fi.lifesup.hackathon.config.JHipsterProperties;
import fi.lifesup.hackathon.domain.Application;
import fi.lifesup.hackathon.domain.ApplicationInviteEmail;
import fi.lifesup.hackathon.domain.User;
import fi.lifesup.hackathon.security.SecurityUtils;
import fi.lifesup.hackathon.service.dto.ApplicationMemberDTO;
import fi.lifesup.hackathon.service.dto.CompanyDTO;

/**
 * Service for sending e-mails.
 * <p>
 * We use the @Async annotation to send e-mails asynchronously.
 * </p>
 */
@Service
public class MailService {

	private final Logger log = LoggerFactory.getLogger(MailService.class);

	@Value("${spring.mail.username}")
	private String adminMail;
	
	private static final String USER = "user";
	private static final String BASE_URL = "baseUrl";
	private static final String CHALLENGE = "challenge";
	private static final String COMPANY = "company";
	private static final String PASSWORD = "password";
	private static final String APPLICATION = "application";

	@Inject
	private JHipsterProperties jHipsterProperties;

	@Inject
	private JavaMailSenderImpl javaMailSender;

	@Inject
	private MessageSource messageSource;

	@Inject
	private SpringTemplateEngine templateEngine;

	@Async
	public void sendEmail(String to, String subject, String content, boolean isMultipart, boolean isHtml) {
		log.debug("Send e-mail[multipart '{}' and html '{}'] to '{}' with subject '{}' and content={}", isMultipart,
				isHtml, to, subject, content);

		// Prepare message using a Spring helper
		MimeMessage mimeMessage = javaMailSender.createMimeMessage();
		try {
			MimeMessageHelper message = new MimeMessageHelper(mimeMessage, isMultipart, CharEncoding.UTF_8);
			message.setTo(to);
			message.setFrom(jHipsterProperties.getMail().getFrom());
			message.setSubject(subject);
			message.setText(content, isHtml);
			javaMailSender.send(mimeMessage);
			log.debug("Sent e-mail to User '{}'", to);
		} catch (Exception e) {
			log.warn("E-mail could not be sent to user '{}'", to, e);
		}
	}

	@Async
	public void sendActivationEmail(User user, String baseUrl) {
		log.debug("Sending activation e-mail to '{}'", user.getEmail());
		Locale locale = Locale.forLanguageTag(user.getLangKey());
		Context context = new Context(locale);
		context.setVariable(USER, user);
		context.setVariable(BASE_URL, baseUrl);
		String content = templateEngine.process("activationEmail", context);
		String subject = messageSource.getMessage("email.activation.title", null, locale);
		sendEmail(user.getEmail(), subject, content, false, true);
	}

	@Async
	public void sendCreationEmail(User user, String baseUrl, String password) {
		log.debug("Sending creation e-mail to '{}'", user.getEmail());
		Locale locale = Locale.forLanguageTag(user.getLangKey());
		Context context = new Context(locale);
		context.setVariable(USER, user);
		context.setVariable(BASE_URL, baseUrl);
		context.setVariable(PASSWORD, password);
		String content = templateEngine.process("creationEmail", context);
		String subject = messageSource.getMessage("email.activation.title", null, locale);
		sendEmail(user.getEmail(), subject, content, false, true);
	}

	@Async
	public void sendPasswordResetMail(User user, String baseUrl) {
		log.debug("Sending password reset e-mail to '{}'", user.getEmail());
		Locale locale = Locale.forLanguageTag(user.getLangKey());
		Context context = new Context(locale);
		context.setVariable(USER, user);
		context.setVariable(BASE_URL, baseUrl);

		String content = templateEngine.process("passwordResetEmail", context);
		String subject = messageSource.getMessage("email.reset.title", null, locale);
		sendEmail(user.getEmail(), subject, content, false, true);
	}

	@Async
	public void sendInvitationMail(ApplicationInviteEmail member, String baseUrl) {
		log.debug("Sending invitation member e-mail to '{}'", member.getEmail());
		Locale locale = Locale.forLanguageTag("en");
		
		Context context = new Context(locale);
		context.setVariable(USER, member);
		context.setVariable(BASE_URL, baseUrl);
		context.setVariable(CHALLENGE, member.getApplication().getChallenge().getName());

		String content = templateEngine.process("invitationMail", context);
		String subject = messageSource.getMessage("email.invitation.title", null, locale);
		sendEmail(member.getEmail(), subject, content, false, true);
	}
	
	@Async
	public void sendCompanyMail(CompanyDTO company, String baseUrl){
		log.debug("Sending  e-mail to admin '{}'", adminMail);
		Locale locate = Locale.forLanguageTag("en");
		Context context = new Context(locate);
		context.setVariable(COMPANY, company);
		context.setVariable(CHALLENGE, company.getName());
		String content = templateEngine.process("companyMail", context);
		String subject = messageSource.getMessage("email.company.title", null, locate);
		sendEmail(adminMail, subject, content, false, true);
	}
	
	@Async
	public void sendQuestionMail(Application application, String baseUrl, String language, String email){
		log.debug("Sending  e-mail to admin '{}'", adminMail);
		Locale locate = Locale.forLanguageTag(language);
		Context context = new Context(locate);
		context.setVariable(APPLICATION, application);
		context.setVariable(BASE_URL, baseUrl);
		String content = templateEngine.process("questionEmail", context);
		String subject = messageSource.getMessage("email.question.title", null, locate);
		sendEmail(email, subject, content, false, true);
	}
	
}
