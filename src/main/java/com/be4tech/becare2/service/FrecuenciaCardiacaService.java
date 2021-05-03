package com.be4tech.becare2.service;

import com.be4tech.becare2.domain.FrecuenciaCardiaca;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * Service Interface for managing {@link FrecuenciaCardiaca}.
 */
public interface FrecuenciaCardiacaService {
    /**
     * Save a frecuenciaCardiaca.
     *
     * @param frecuenciaCardiaca the entity to save.
     * @return the persisted entity.
     */
    FrecuenciaCardiaca save(FrecuenciaCardiaca frecuenciaCardiaca);

    /**
     * Partially updates a frecuenciaCardiaca.
     *
     * @param frecuenciaCardiaca the entity to update partially.
     * @return the persisted entity.
     */
    Optional<FrecuenciaCardiaca> partialUpdate(FrecuenciaCardiaca frecuenciaCardiaca);

    /**
     * Get all the frecuenciaCardiacas.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Page<FrecuenciaCardiaca> findAll(Pageable pageable);

    /**
     * Get the "id" frecuenciaCardiaca.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Optional<FrecuenciaCardiaca> findOne(Long id);

    /**
     * Delete the "id" frecuenciaCardiaca.
     *
     * @param id the id of the entity.
     */
    void delete(Long id);
}