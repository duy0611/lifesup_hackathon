package fi.lifesup.hackathon.repository;

import fi.lifesup.hackathon.domain.Challenge;

import org.springframework.data.jpa.repository.*;

import java.time.ZonedDateTime;
import java.util.List;

/**
 * Spring Data JPA repository for the Challenge entity.
 */
@SuppressWarnings("unused")
public interface ChallengeRepository extends JpaRepository<Challenge,Long> {

	List<Challenge> findByCompanyId(Long id);
	
	@Query("select challenge from Challenge challenge, ChallengeInfo challengeInfo, "
			+ "ChallengeUserApplication challengeUserApplication where challengeUserApplication.userId = :#{[0]} "
			+ "and challengeUserApplication.challengeId = challenge.id and challenge.info.id = challengeInfo.id "
			+ "and (challengeInfo.status = 'ACTIVE' or challengeInfo.status = 'INACTIVE')")
	List<Challenge> getChallengeByUser(Long id);
	
	@Query("select challenge from Challenge challenge, ChallengeInfo challengeInfo "
			+ "where challenge.info.id = challengeInfo.id and "
			+ "challengeInfo.eventStartTime between :#{[1]} and :#{[2]} group by challenge.id ")
	List<Challenge> getChallengeByDate(ZonedDateTime startdate, ZonedDateTime endDate);
}
