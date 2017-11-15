package fi.lifesup.hackathon.repository;

import fi.lifesup.hackathon.domain.ChallengeSubmission;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the ChallengeSubmission entity.
 */
@SuppressWarnings("unused")
public interface ChallengeSubmissionRepository extends JpaRepository<ChallengeSubmission,Long> {

}