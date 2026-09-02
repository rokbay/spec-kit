# Graph Report - spec-kit  (2026-04-22)

## Corpus Check
- 251 files · ~924,930 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 4101 nodes · 15324 edges · 48 communities detected
- Extraction: 34% EXTRACTED · 66% INFERRED · 0% AMBIGUOUS · INFERRED: 10051 edges (avg confidence: 0.58)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]
- [[_COMMUNITY_Community 9|Community 9]]
- [[_COMMUNITY_Community 10|Community 10]]
- [[_COMMUNITY_Community 11|Community 11]]
- [[_COMMUNITY_Community 12|Community 12]]
- [[_COMMUNITY_Community 13|Community 13]]
- [[_COMMUNITY_Community 14|Community 14]]
- [[_COMMUNITY_Community 15|Community 15]]
- [[_COMMUNITY_Community 16|Community 16]]
- [[_COMMUNITY_Community 17|Community 17]]
- [[_COMMUNITY_Community 18|Community 18]]
- [[_COMMUNITY_Community 19|Community 19]]
- [[_COMMUNITY_Community 20|Community 20]]
- [[_COMMUNITY_Community 21|Community 21]]
- [[_COMMUNITY_Community 22|Community 22]]
- [[_COMMUNITY_Community 23|Community 23]]
- [[_COMMUNITY_Community 24|Community 24]]
- [[_COMMUNITY_Community 25|Community 25]]
- [[_COMMUNITY_Community 26|Community 26]]
- [[_COMMUNITY_Community 27|Community 27]]
- [[_COMMUNITY_Community 28|Community 28]]
- [[_COMMUNITY_Community 29|Community 29]]
- [[_COMMUNITY_Community 30|Community 30]]
- [[_COMMUNITY_Community 31|Community 31]]
- [[_COMMUNITY_Community 32|Community 32]]
- [[_COMMUNITY_Community 33|Community 33]]
- [[_COMMUNITY_Community 66|Community 66]]
- [[_COMMUNITY_Community 67|Community 67]]
- [[_COMMUNITY_Community 68|Community 68]]
- [[_COMMUNITY_Community 69|Community 69]]
- [[_COMMUNITY_Community 70|Community 70]]
- [[_COMMUNITY_Community 71|Community 71]]
- [[_COMMUNITY_Community 72|Community 72]]
- [[_COMMUNITY_Community 73|Community 73]]
- [[_COMMUNITY_Community 74|Community 74]]
- [[_COMMUNITY_Community 75|Community 75]]
- [[_COMMUNITY_Community 76|Community 76]]
- [[_COMMUNITY_Community 104|Community 104]]
- [[_COMMUNITY_Community 105|Community 105]]
- [[_COMMUNITY_Community 106|Community 106]]

## God Nodes (most connected - your core abstractions)
1. `CommandRegistrar` - 742 edges
2. `ExtensionRegistry` - 545 edges
3. `PresetResolver` - 528 edges
4. `ExtensionManager` - 462 edges
5. `ExtensionManifest` - 412 edges
6. `PresetManager` - 388 edges
7. `ValidationError` - 354 edges
8. `CommandRegistrar` - 344 edges
9. `IntegrationManifest` - 343 edges
10. `PresetCatalog` - 341 edges

## Surprising Connections (you probably didn't know these)
- `text()` --calls--> `show_banner()`  [INFERRED]
  graphify\worked\httpx\raw\models.py → src\specify_cli\__init__.py
- `CommandRegistrar` --uses--> `Normalize a stored priority value for sorting and display.      Corrupted regist`  [INFERRED]
  src\specify_cli\agents.py → src\specify_cli\extensions.py
- `CommandRegistrar` --uses--> `Initialize registry.          Args:             extensions_dir: Path to .specify`  [INFERRED]
  src\specify_cli\agents.py → src\specify_cli\extensions.py
- `CommandRegistrar` --uses--> `Load registry from disk.`  [INFERRED]
  src\specify_cli\agents.py → src\specify_cli\extensions.py
- `CommandRegistrar` --uses--> `Save registry to disk.`  [INFERRED]
  src\specify_cli\agents.py → src\specify_cli\extensions.py

## Communities

### Community 0 - "Community 0"
Cohesion: 0.02
Nodes (475): CommandRegistrar, Render command in TOML format.          Args:             frontmatter: Command f, Handles registration of commands with AI agents.      Supports writing command f, _render_basic_toml_string(), Concrete base for integrations that install commands as agent skills.      Skill, SkillsIntegration, Remove ANSI escape codes from Rich-formatted CLI output., strip_ansi() (+467 more)

### Community 1 - "Community 1"
Cohesion: 0.01
Nodes (258): ABC, copy_command_to_directory(), _extract_description(), IntegrationBase, IntegrationOption, MarkdownIntegration, process_template(), Base classes for AI-assistant integrations.  Provides: - ``IntegrationOption`` — (+250 more)

### Community 2 - "Community 2"
Cohesion: 0.03
Nodes (236): preset_remove(), preset_resolve(), author(), PresetCatalog, PresetCatalogEntry, PresetCompatibilityError, PresetError, PresetManager (+228 more)

### Community 3 - "Community 3"
Cohesion: 0.01
Nodes (358): _cross_community_surprises(), _cross_file_surprises(), _file_category(), god_nodes(), graph_diff(), _is_concept_node(), _is_file_node(), _node_community_map() (+350 more)

### Community 4 - "Community 4"
Cohesion: 0.01
Nodes (235): _build_agent_configs(), build_skill_frontmatter(), _compute_output_name(), _ensure_configs(), parse_frontmatter(), Agent Command Registrar for Spec Kit  Shared infrastructure for registering comm, Normalize script paths in frontmatter to generated project locations.          R, Render command in Markdown format.          Args:             frontmatter: Comma (+227 more)

### Community 5 - "Community 5"
Cohesion: 0.02
Nodes (247): _check_tree_sitter_version(), collect_files(), _csharp_extra_walk(), extract(), extract_blade(), extract_c(), extract_cpp(), extract_csharp() (+239 more)

### Community 6 - "Community 6"
Cohesion: 0.03
Nodes (104): Auth, BasicAuth, BearerAuth, DigestAuth, NetRCAuth, Authentication handlers. Auth objects are callables that modify a request befor, Load credentials from ~/.netrc based on the request host., Base class for all authentication handlers. (+96 more)

### Community 7 - "Community 7"
Cohesion: 0.02
Nodes (133): _agents_install(), _agents_uninstall(), _antigravity_install(), _antigravity_uninstall(), _check_skill_version(), claude_install(), claude_uninstall(), _cursor_install() (+125 more)

### Community 8 - "Community 8"
Cohesion: 0.03
Nodes (112): _detect_url_type(), _download_binary(), _fetch_arxiv(), _fetch_html(), _fetch_tweet(), _fetch_webpage(), _html_to_markdown(), ingest() (+104 more)

### Community 9 - "Community 9"
Cohesion: 0.03
Nodes (56): Run create-new-feature.sh with given args., Source common.sh and call a function., Test 1: --timestamp creates branch with YYYYMMDD-HHMMSS prefix., Test 3: --number + --timestamp warns and uses timestamp., Test 4: JSON output contains expected keys., Test 5: Long branch name is truncated to <= 244 chars., Test 2: Sequential default with existing specs., Sequential numbering skips timestamp dirs when computing next number. (+48 more)

### Community 10 - "Community 10"
Cohesion: 0.03
Nodes (51): Base, Server, LinearAlgebra, _build_user_message(), _chunk_files(), estimate_cost(), _extract_claude(), extract_corpus_parallel() (+43 more)

### Community 11 - "Community 11"
Cohesion: 0.05
Nodes (47): _init_git(), Tests for the bundled git extension (extensions/git/).  Validates: - extension.y, Run an extension PowerShell script., initialize-repo.sh creates a git repo with initial commit., initialize-repo.sh skips if already a git repo., initialize-repo.sh reads custom commit message from config., initialize-repo.ps1 creates a git repo with initial commit., initialize-repo.ps1 skips if already a git repo. (+39 more)

### Community 12 - "Community 12"
Cohesion: 0.05
Nodes (70): classify_file(), convert_office_file(), count_words(), detect(), detect_incremental(), docx_to_markdown(), extract_pdf_text(), FileType (+62 more)

### Community 13 - "Community 13"
Cohesion: 0.04
Nodes (11): handleSubmit(), handleWhatsAppOrder(), validateForm(), CacheStrategy, ConnectivityChecker, ConvexDirectStrategy, LocalhostHttpStrategy, WebSocketStrategy (+3 more)

### Community 14 - "Community 14"
Cohesion: 0.06
Nodes (37): MarkdownIntegrationTests, Tests for AmpIntegration., TestAmpIntegration, Tests for AuggieIntegration., TestAuggieIntegration, MarkdownIntegrationTests, Tests for BobIntegration., TestBobIntegration (+29 more)

### Community 15 - "Community 15"
Cohesion: 0.03
Nodes (32): Consistency checks for agent configuration across runtime surfaces., CLI help text for --ai should include tabnine., AGENT_CONFIG should include kimi with correct folder and commands_subdir., Extension command registrar should include kimi using .kimi/skills and SKILL.md., PowerShell update-agent-context script should include 'kimi' in ValidateSet., CLI help text for --ai should include kimi., AGENT_CONFIG should include trae with correct folder and commands_subdir., Ensure kiro-cli migration stays synchronized across key surfaces. (+24 more)

### Community 16 - "Community 16"
Cohesion: 0.05
Nodes (24): _init_project(), Tests for ``specify integration`` subcommand (list, install, uninstall, switch)., Install into a project with .specify/ but no integration., Helper: init a spec-kit project with the given integration., Installing into a bare project should create shared scripts and templates., Full lifecycle: install → modify → uninstall → modified file kept., Shared scripts and templates are not removed by integration uninstall., Switching preserves shared scripts, templates, and memory. (+16 more)

### Community 17 - "Community 17"
Cohesion: 0.06
Nodes (43): _body_content(), cache_dir(), cached_files(), check_semantic_cache(), clear_cache(), file_hash(), load_cached(), Return set of file paths that have a valid cache entry (hash still matches). (+35 more)

### Community 18 - "Community 18"
Cohesion: 0.13
Nodes (13): ConfigManager, Manages layered configuration for extensions.      Configuration layers (in orde, Initialize config manager for an extension.          Args:             project_r, Load configuration from YAML file.          Args:             file_path: Path to, Get default configuration from extension manifest.          Returns:, Get project-level configuration.          Returns:             Project configura, Get local configuration (gitignored, machine-specific).          Returns:, Get configuration from environment variables.          Environment variables fol (+5 more)

### Community 19 - "Community 19"
Cohesion: 0.11
Nodes (13): Tests for GIT_BRANCH_NAME env var override in extension create-new-feature.sh., GIT_BRANCH_NAME is used verbatim with no numeric prefix added., FEATURE_NUM extracted from sequential-style prefix (digits before dash)., FEATURE_NUM extracted as full YYYYMMDD-HHMMSS for timestamp-style names., GIT_BRANCH_NAME exceeding 244 bytes is rejected with an error., GIT_BRANCH_NAME works with --dry-run (no branch created)., Tests for GIT_BRANCH_NAME env var override in extension create-new-feature.ps1., GIT_BRANCH_NAME is used verbatim with no numeric prefix added. (+5 more)

### Community 20 - "Community 20"
Cohesion: 0.16
Nodes (17): _normalize_id(), Normalize an ID string the same way extract._make_id does.      Used to reconc, test_assert_valid_passes_silently(), test_assert_valid_raises_on_errors(), test_dangling_edge_source(), test_dangling_edge_target(), test_invalid_confidence(), test_invalid_file_type() (+9 more)

### Community 21 - "Community 21"
Cohesion: 0.29
Nodes (18): Extract-PlanField(), Format-TechnologyStack(), Get-CommandsForLanguage(), Get-LanguageConventions(), Get-ProjectStructure(), Main(), New-AgentFile(), Parse-PlanData() (+10 more)

### Community 22 - "Community 22"
Cohesion: 0.31
Nodes (1): TestCatalogStack

### Community 23 - "Community 23"
Cohesion: 0.23
Nodes (12): _git_root(), _hooks_dir(), install(), _install_hook(), Walk up to find .git directory., Return the git hooks directory, respecting core.hooksPath if set (e.g. Husky)., Install a single git hook, appending if an existing hook is present., Remove graphify section from a git hook using start/end markers. (+4 more)

### Community 24 - "Community 24"
Cohesion: 0.23
Nodes (7): Run update-agent-context.sh for a specific agent type., Creating a new .mdc file must include YAML frontmatter., Updating an existing .mdc file that lacks frontmatter must add it., Updating an .mdc file that already has frontmatter must not duplicate it., Non-.mdc agent files (e.g., Claude) must NOT get frontmatter., Integration tests using a real git repo., TestCursorFrontmatterIntegration

### Community 25 - "Community 25"
Cohesion: 0.33
Nodes (6): Find-SpecifyRoot(), Get-CurrentBranch(), Get-FeatureDir(), Get-FeaturePathsEnv(), Get-RepoRoot(), Test-HasGit()

### Community 26 - "Community 26"
Cohesion: 0.47
Nodes (7): ConvertTo-CleanBranchName(), Get-BranchName(), Get-HighestNumberFromBranches(), Get-HighestNumberFromNames(), Get-HighestNumberFromRemoteRefs(), Get-HighestNumberFromSpecs(), Get-NextBranchNumber()

### Community 27 - "Community 27"
Cohesion: 0.25
Nodes (5): Tests for auto-installation of the git extension during specify init., Without --no-git, the git extension is installed during init., With --no-git, the git extension is NOT installed., Git extension commands are registered with the agent during init., TestGitExtensionAutoInstall

### Community 28 - "Community 28"
Cohesion: 0.43
Nodes (6): EventServiceProvider, NotifyAdmins, OrderPlaced, SendWelcomeEmail, ShipOrder, UserRegistered

### Community 29 - "Community 29"
Cohesion: 0.33
Nodes (2): ClientInitializer(), useInitializeConnectivity()

### Community 30 - "Community 30"
Cohesion: 0.33
Nodes (5): Animal, -initWithName, -speak, Dog, -fetch

### Community 31 - "Community 31"
Cohesion: 0.67
Nodes (4): AppServiceProvider, CashierGateway, PaymentGateway, StripeGateway

### Community 32 - "Community 32"
Cohesion: 0.6
Nodes (2): ColorResolver, DefaultPalette

### Community 33 - "Community 33"
Cohesion: 0.5
Nodes (1): Transformer

### Community 66 - "Community 66"
Cohesion: 1.0
Nodes (1): Parse YAML frontmatter from Markdown content.          Args:             content

### Community 67 - "Community 67"
Cohesion: 1.0
Nodes (1): Render frontmatter dictionary as YAML.          Args:             fm: Frontmatte

### Community 68 - "Community 68"
Cohesion: 1.0
Nodes (1): Rewrite repo-relative paths to their generated project locations.

### Community 69 - "Community 69"
Cohesion: 1.0
Nodes (1): Render *value* as a TOML basic string literal.

### Community 70 - "Community 70"
Cohesion: 1.0
Nodes (1): Build consistent SKILL.md frontmatter across all skill generators.

### Community 71 - "Community 71"
Cohesion: 1.0
Nodes (1): Resolve script placeholders for skills-backed agents.

### Community 72 - "Community 72"
Cohesion: 1.0
Nodes (1): Compute the on-disk command or skill name for an agent.

### Community 73 - "Community 73"
Cohesion: 1.0
Nodes (1): Generate a companion .prompt.md file for a Copilot agent command.          Args:

### Community 74 - "Community 74"
Cohesion: 1.0
Nodes (1): Path to the on-disk manifest JSON.

### Community 75 - "Community 75"
Cohesion: 1.0
Nodes (1): Return a copy of the ``{rel_path: sha256}`` mapping.

### Community 76 - "Community 76"
Cohesion: 1.0
Nodes (1): Load an existing manifest from disk.          Raises ``FileNotFoundError`` if th

### Community 104 - "Community 104"
Cohesion: 1.0
Nodes (1): Create a minimal git repo with the spec-kit structure.

### Community 105 - "Community 105"
Cohesion: 1.0
Nodes (1): PowerShell: SPECIFY_FEATURE_DIRECTORY env var takes priority.

### Community 106 - "Community 106"
Cohesion: 1.0
Nodes (1): PowerShell: feature.json takes priority over branch-based lookup.

## Knowledge Gaps
- **521 isolated node(s):** `AiWebsiteBuilder`, `Invert communities dict: node_id -> community_id.`, `Return True if this node is a file-level hub node (e.g. 'client', 'models')`, `Return the top_n most-connected real entities - the core abstractions.      Fi`, `Find connections that are genuinely surprising - not obvious from file structure` (+516 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 22`** (18 nodes): `.get_active_catalogs()`, `TestCatalogStack`, `._make_project()`, `.test_catalog_entries_without_urls_raises_error()`, `.test_default_stack()`, `.test_empty_project_config_raises_error()`, `.test_env_var_invalid_url_raises()`, `.test_env_var_overrides_default_stack()`, `.test_install_allowed_false_from_get_extension_info()`, `.test_load_catalog_config_localhost_allowed()`, `.test_load_catalog_config_missing_file()`, `.test_merge_conflict_higher_priority_wins()`, `.test_project_config_invalid_url_raises()`, `.test_project_config_overrides_defaults()`, `.test_project_config_sorted_by_priority()`, `.test_search_results_include_catalog_metadata()`, `._write_catalog_config()`, `._write_valid_cache()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 29`** (6 nodes): `ClientInitializer.jsx`, `useConnectivity.js`, `ClientInitializer()`, `useConnectedRequest()`, `useConvexStatus()`, `useInitializeConnectivity()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 32`** (5 nodes): `sample_php_static_prop.php`, `ColorResolver`, `.accent()`, `.primary()`, `DefaultPalette`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 33`** (4 nodes): `sample.py`, `Transformer`, `.forward()`, `.__init__()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 66`** (1 nodes): `Parse YAML frontmatter from Markdown content.          Args:             content`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 67`** (1 nodes): `Render frontmatter dictionary as YAML.          Args:             fm: Frontmatte`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 68`** (1 nodes): `Rewrite repo-relative paths to their generated project locations.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 69`** (1 nodes): `Render *value* as a TOML basic string literal.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 70`** (1 nodes): `Build consistent SKILL.md frontmatter across all skill generators.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 71`** (1 nodes): `Resolve script placeholders for skills-backed agents.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 72`** (1 nodes): `Compute the on-disk command or skill name for an agent.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 73`** (1 nodes): `Generate a companion .prompt.md file for a Copilot agent command.          Args:`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 74`** (1 nodes): `Path to the on-disk manifest JSON.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 75`** (1 nodes): `Return a copy of the ``{rel_path: sha256}`` mapping.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 76`** (1 nodes): `Load an existing manifest from disk.          Raises ``FileNotFoundError`` if th`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 104`** (1 nodes): `Create a minimal git repo with the spec-kit structure.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 105`** (1 nodes): `PowerShell: SPECIFY_FEATURE_DIRECTORY env var takes priority.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 106`** (1 nodes): `PowerShell: feature.json takes priority over branch-based lookup.`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `CommandRegistrar` connect `Community 0` to `Community 1`, `Community 2`, `Community 4`, `Community 18`, `Community 22`?**
  _High betweenness centrality (0.150) - this node is a cross-community bridge._
- **Why does `IntegrationManifest` connect `Community 1` to `Community 0`, `Community 2`, `Community 4`, `Community 14`?**
  _High betweenness centrality (0.087) - this node is a cross-community bridge._
- **Why does `PresetRegistry` connect `Community 2` to `Community 0`, `Community 4`?**
  _High betweenness centrality (0.052) - this node is a cross-community bridge._
- **Are the 730 inferred relationships involving `CommandRegistrar` (e.g. with `ExtensionError` and `ValidationError`) actually correct?**
  _`CommandRegistrar` has 730 INFERRED edges - model-reasoned connections that need verification._
- **Are the 530 inferred relationships involving `ExtensionRegistry` (e.g. with `CommandRegistrar` and `PresetCatalogEntry`) actually correct?**
  _`ExtensionRegistry` has 530 INFERRED edges - model-reasoned connections that need verification._
- **Are the 521 inferred relationships involving `PresetResolver` (e.g. with `ExtensionRegistry` and `CommandRegistrar`) actually correct?**
  _`PresetResolver` has 521 INFERRED edges - model-reasoned connections that need verification._
- **Are the 448 inferred relationships involving `ExtensionManager` (e.g. with `CommandRegistrar` and `StepTracker`) actually correct?**
  _`ExtensionManager` has 448 INFERRED edges - model-reasoned connections that need verification._