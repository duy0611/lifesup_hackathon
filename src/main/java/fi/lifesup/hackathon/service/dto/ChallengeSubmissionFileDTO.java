package fi.lifesup.hackathon.service.dto;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public class ChallengeSubmissionFileDTO {
	private long challengeSubmissionId;
	private MultipartFile file;
	private String fileName;
	private String base64;
	

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getBase64() {
		return base64;
	}

	public void setBase64(String base64) {
		this.base64 = base64;
	}

	public long getChallengeSubmissionId() {
		return challengeSubmissionId;
	}

	public void setChallengeSubmissionId(long challengeSubmissionId) {
		this.challengeSubmissionId = challengeSubmissionId;
	}

	public MultipartFile getFile() {
		return file;
	}

	public void setFile(MultipartFile file) {
		this.file = file;
	}

}
