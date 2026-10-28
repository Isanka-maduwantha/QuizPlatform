"use client";

import { useEffect, useState } from "react";

const DEFAULT_RULES = {
  correctPoints: 10,
  secondChancePoints: 5,
  wrongAction: "standard",
  wrongPenalty: 0,
  passBonus: 5,
  rapidFirePoints: 5,
};

const POINT_LIMIT = 10000;

function boundedPoints(value, fallback) {
  if (value === "" || value === null || value === undefined) {
    return fallback;
  }

  const parsed = Number(value);

  if (!Number.isFinite(parsed)) return fallback;

  return Math.min(
    POINT_LIMIT,
    Math.max(0, Math.round(parsed))
  );
}

export default function ScoringRulesPanel({ rules, onSave }) {
  const [draft, setDraft] = useState({
    ...DEFAULT_RULES,
    ...rules,
  });

  const [isDirty, setIsDirty] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!isDirty) {
      setDraft({
        ...DEFAULT_RULES,
        ...rules,
      });
    }
  }, [rules, isDirty]);

  const update = (key, value) => {
    setDraft((current) => ({
      ...current,
      [key]: value,
    }));

    setIsDirty(true);
    setMessage("");
    setHasError(false);
  };

  const save = async () => {
    if (saving || !isDirty) return;

    setSaving(true);
    setMessage("");
    setHasError(false);

    try {
      const updatedRules = {
        ...draft,

        correctPoints: boundedPoints(
          draft.correctPoints,
          DEFAULT_RULES.correctPoints
        ),

        secondChancePoints: boundedPoints(
          draft.secondChancePoints,
          DEFAULT_RULES.secondChancePoints
        ),

        wrongPenalty: boundedPoints(
          draft.wrongPenalty,
          DEFAULT_RULES.wrongPenalty
        ),

        passBonus: boundedPoints(
          draft.passBonus,
          DEFAULT_RULES.passBonus
        ),

        rapidFirePoints: boundedPoints(
          draft.rapidFirePoints,
          DEFAULT_RULES.rapidFirePoints
        ),
      };

      const saved = await onSave(updatedRules);

      if (!saved) {
        throw new Error("The rules could not be saved.");
      }

      setDraft(updatedRules);
      setIsDirty(false);
      setMessage("Rules saved successfully.");
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "The rules could not be saved."
      );

      setHasError(true);
    } finally {
      setSaving(false);
    }
  };

  return (
    <section
      className="scoring-rules card"
      aria-labelledby="scoring-rules-title"
    >
      <header className="scoring-rules-header">
        <div>
          <span className="scoring-rules-kicker">
            MATCH SETTINGS
          </span>

          <h3 id="scoring-rules-title">
            Scoring rules
          </h3>

          <p>
            Choose what happens during each part of
            the match. No code required.
          </p>
        </div>

        <button
          type="button"
          className="btn scoring-rules-save"
          onClick={save}
          disabled={!isDirty || saving}
        >
          {saving ? "Saving…" : "Save rules"}
        </button>
      </header>

      <div className="scoring-rules-grid">

        {/* FIRST PLAYER CORRECT ANSWER */}

        <label className="scoring-rule-field">
          <span>Correct answer — First player</span>

          <small>
            Points awarded when the first player
            answers correctly.
          </small>

          <span className="scoring-rule-control">
            <input
              type="number"
              min="0"
              max={POINT_LIMIT}
              step="1"
              value={draft.correctPoints}
              onChange={(event) =>
                update(
                  "correctPoints",
                  event.target.value
                )
              }
            />

            <b>pts</b>
          </span>
        </label>

        {/* SECOND PLAYER SAME TEAM */}

        <label className="scoring-rule-field">
          <span>
            Second player — Same team
          </span>

          <small>
            Points awarded when the second player
            from the same team answers correctly
            after the first player gives a wrong answer.
          </small>

          <span className="scoring-rule-control">
            <input
              type="number"
              min="0"
              max={POINT_LIMIT}
              step="1"
              value={draft.secondChancePoints}
              onChange={(event) =>
                update(
                  "secondChancePoints",
                  event.target.value
                )
              }
            />

            <b>pts</b>
          </span>
        </label>

        {/* WRONG ANSWER ACTION */}

        <label className="scoring-rule-field">
          <span>When an answer is wrong</span>

          <small>
            Choose whether to pass the turn
            or finish the question.
          </small>

          <select
            value={draft.wrongAction}
            onChange={(event) =>
              update(
                "wrongAction",
                event.target.value
              )
            }
          >
            <option value="standard">
              Same team gets a second chance,
              then opponent
            </option>

            <option value="opponent">
              Pass directly to the opposing team
            </option>

            <option value="reveal">
              Reveal the correct answer and finish
            </option>
          </select>
        </label>

        {/* WRONG ANSWER PENALTY */}

        <label className="scoring-rule-field">
          <span>Wrong-answer penalty</span>

          <small>
            Points deducted from the team
            for each wrong answer.
            Set 0 for none.
          </small>

          <span className="scoring-rule-control">
            <input
              type="number"
              min="0"
              max={POINT_LIMIT}
              step="1"
              value={draft.wrongPenalty}
              onChange={(event) =>
                update(
                  "wrongPenalty",
                  event.target.value
                )
              }
            />

            <b>pts</b>
          </span>
        </label>

        {/* OPPONENT CORRECT ANSWER */}

        <label className="scoring-rule-field">
          <span>
            Opponent answers correctly
          </span>

          <small>
            Points awarded when the question
            passes to the opposing team
            and they answer correctly.
          </small>

          <span className="scoring-rule-control">
            <input
              type="number"
              min="0"
              max={POINT_LIMIT}
              step="1"
              value={draft.passBonus}
              onChange={(event) =>
                update(
                  "passBonus",
                  event.target.value
                )
              }
            />

            <b>pts</b>
          </span>
        </label>

        {/* RAPID FIRE POINTS */}

        <label className="scoring-rule-field">
          <span>
            Rapid-fire correct answer
          </span>

          <small>
            Points awarded when the host
            marks a rapid-fire answer correct.
          </small>

          <span className="scoring-rule-control">
            <input
              type="number"
              min="0"
              max={POINT_LIMIT}
              step="1"
              value={draft.rapidFirePoints}
              onChange={(event) =>
                update(
                  "rapidFirePoints",
                  event.target.value
                )
              }
            />

            <b>pts</b>
          </span>
        </label>

      </div>

      <footer
        className="scoring-rules-footer"
        aria-live="polite"
      >
        <span
          className={
            hasError ? "scoring-rules-error" : ""
          }
        >
          {message ||
            "Changes take effect for the next answer."}
        </span>

        <span>
          Allowed range: 0–
          {POINT_LIMIT.toLocaleString()} points
        </span>
      </footer>
    </section>
  );
}