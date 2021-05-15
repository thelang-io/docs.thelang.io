#!/usr/bin/env bash

#
# Copyright (c) 2021-present Aaron Delasy
#

set -e

cat > .git/hooks/pre-commit << EOF
#!/usr/bin/env bash
set -e

scripts/lint-text.sh
scripts/lint-code.sh
EOF

chmod +x .git/hooks/pre-commit
