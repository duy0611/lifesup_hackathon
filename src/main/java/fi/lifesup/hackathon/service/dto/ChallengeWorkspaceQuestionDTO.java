package fi.lifesup.hackathon.service.dto;

import java.util.List;

public class ChallengeWorkspaceQuestionDTO {
	private Long id;
	private Long applicationId;
	private Long workspaceId;
	private String subject;
	private String content;
	private List<ChallengeWorkspaceAnswerDTO> answers;	
	
	public ChallengeWorkspaceQuestionDTO() {
		// TODO Auto-generated constructor stub
	}
	
	public ChallengeWorkspaceQuestionDTO(Long id, Long applicationId, Long workspaceId, String subject, String content) {
		super();
		this.id = id;
		this.applicationId = applicationId;
		this.workspaceId = workspaceId;
		this.subject = subject;
		this.content = content;
		this.answers = answers;
	}



	public List<ChallengeWorkspaceAnswerDTO> getAnswers() {
		return answers;
	}
	public void setAnswers(List<ChallengeWorkspaceAnswerDTO> answers) {
		this.answers = answers;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public Long getApplicationId() {
		return applicationId;
	}
	public void setApplicationId(Long applicationId) {
		this.applicationId = applicationId;
	}
	public Long getWorkspaceId() {
		return workspaceId;
	}
	public void setWorkspaceId(Long workSpaceId) {
		this.workspaceId = workSpaceId;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	
}