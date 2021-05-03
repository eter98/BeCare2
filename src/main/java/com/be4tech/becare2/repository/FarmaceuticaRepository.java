package com.be4tech.becare2.repository;

import com.be4tech.becare2.domain.Farmaceutica;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Farmaceutica entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FarmaceuticaRepository extends JpaRepository<Farmaceutica, Long>, JpaSpecificationExecutor<Farmaceutica> {}
