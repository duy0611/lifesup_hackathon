package fi.lifesup.hackathon.service.dto;

import java.time.ZonedDateTime;

public class ChallengeSubmissionFeedbackDTO {
	private Long id;
	private String feedbackText;
	private ZonedDateTime createdDate;
	private String createdBy;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFeedbackText() {
		return feedbackText;
	}

	public void setFeedbackText(String feedbackText) {
		this.feedbackText = feedbackText;
	}

	public ZonedDateTime getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(ZonedDateTime createdDate) {
		this.createdDate = createdDate;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public ChallengeSubmissionFeedbackDTO() {
		super();
	}

	public ChallengeSubmissionFeedbackDTO(Long id, String feedbackText, ZonedDateTime createdDate, String createdBy) {
		super();
		this.id = id;
		this.feedbackText = feedbackText;
		this.createdDate = createdDate;
		this.createdBy = createdBy;
	}

}