"""empty message

Revision ID: dcbbc81e8cf8
Revises: 1d58ba32994d
Create Date: 2024-08-19 09:37:51.147445

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dcbbc81e8cf8'
down_revision = '1d58ba32994d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('event', schema=None) as batch_op:
        batch_op.alter_column('description',
               existing_type=sa.VARCHAR(length=200),
               type_=sa.String(length=3000),
               existing_nullable=True)

    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('username',
               existing_type=sa.VARCHAR(length=120),
               nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('username',
               existing_type=sa.VARCHAR(length=120),
               nullable=False)

    with op.batch_alter_table('event', schema=None) as batch_op:
        batch_op.alter_column('description',
               existing_type=sa.String(length=3000),
               type_=sa.VARCHAR(length=200),
               existing_nullable=True)

    # ### end Alembic commands ###
