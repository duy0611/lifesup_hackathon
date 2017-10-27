package fi.lifesup.hackathon.repository;

import fi.lifesup.hackathon.domain.ChallengeUserApplication;
import fi.lifesup.hackathon.domain.User;
import fi.lifesup.hackathon.domain.enumeration.UserStatus;
import fi.lifesup.hackathon.service.dto.ApplicationMemberDTO;


import org.springframework.data.jpa.repository.*;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data JPA repository for the ChallengeUserApplication entity.
 */
@SuppressWarnings("unused")
public interface ChallengeUserApplicationRepository extends JpaRepository<ChallengeUserApplication, Long> {

	void deleteByApplicationId(Long id);

	void deleteByChallengeId(Long id);
	
	@Query("select cua from User u, ChallengeUserApplication cua"
			+ " where u.id = cua.userId and cua.applicationId = ?1 and u.email = ?2")
	ChallengeUserApplication getMember(Long id, String email);

	List<ChallengeUserApplication> findByApplicationId(Long applicationId);

	@Query("select cua from ChallengeUserApplication cua where cua.challengeId = :#{[0]} and cua.userId = :#{[1]}")
	ChallengeUserApplication findByChallengeIdAndUserId(Long challengeId, Long userId);

	List<ChallengeUserApplication> findByUserId(Long userId);
		
	@Query("select u.status from User u, ChallengeUserApplication cua"
			+ " where u.id = cua.userId and cua.applicationId = ?1")
	List<UserStatus> checkUserStatus(Long applicationId);
	
	@Query("select new fi.lifesup.hackathon.service.dto.ApplicationMemberDTO(cua.id, u.email)"
			+ " from ChallengeUserApplication cua , User u where cua.applicationId = :#{[0]} and u.id = cua.userId")
	List<ApplicationMemberDTO> getApplicationMemberDeatil(Long applicationId);
	
}
